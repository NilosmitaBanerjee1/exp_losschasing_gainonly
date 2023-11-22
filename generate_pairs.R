#Data: 20-09-2022
#Author: Zhang Chen
#Contributor: Akira


library(tidyverse)
library(dplyr)
library(jsonlite)

theme_set(theme_bw() +
            theme(legend.position = "top",
                  legend.direction = "horizontal"))

# the probabilities of winning will be from 20% till 80%, in increments of 10%
# the magnitude of wins will be from 20 till 80, in increments of 10

optionA_prob <- seq(from = 20, to = 80, by = 10)
optionA_amount <- seq(from = 20, to = 80, by = 10)

optionB_prob <- seq(from = 20, to = 80, by = 10)
optionB_amount <- seq(from = 20, to = 80, by = 10)

# simulate all possible combinations
df <- list(
  A_prob = optionA_prob, A_amount = optionA_amount,
  B_prob = optionB_prob, B_amount = optionB_amount
  ) %>%
  cross_df()

# select experimental pairs, where option A is always high-prob, but low-amount,
# whereas option B is always low-prob, but high-amount
df_exp <- df %>%
  filter(A_prob > B_prob, A_amount < B_amount) %>%
  # compute the expected value of both options, 
  # the average EV and the EV ratio
  mutate(
    A_EV = A_prob * A_amount,
    B_EV = B_prob * B_amount,
    EV_average = (A_EV + B_EV)/2,
    EV_ratio = (A_EV - B_EV)/EV_average
  )


# make a histogram to get an idea of the range of the average EV
ggplot(df_exp, aes(EV_average)) +
  geom_histogram(bins = 10)

# make a histogram to get an idea of the range of the EV ratios
ggplot(df_exp, aes(EV_ratio)) +
  geom_histogram(bins = 10)

# select pairs with the EV ratios between -0.91 and 0.91, to be in line with previous work
df_exp <- df_exp %>%
  filter(
    A_prob >= 50,
    A_amount <= 60,
    B_prob <= 50,
    B_amount >= 40,
    abs(EV_ratio) < 0.91,
    EV_ratio != 0
  )

# divide the pairs into 10 bins, and select 8 pairs from each bin
df_exp <- df_exp %>%
  mutate(EV_ratio_bin = cut_interval(EV_ratio, n = 10)) %>%
  # count the number of pairs in each bin
  group_by(EV_ratio_bin) %>%
  mutate(n_pairs = n()) %>%
  ungroup()

df_exp_select <- df_exp %>%
  group_by(EV_ratio_bin) %>%
  sample_n(8)

# plot how often each amount and probability level is shown
ggplot(df_exp_select, aes(A_prob)) +
  geom_bar()

ggplot(df_exp_select, aes(A_amount)) +
  geom_bar()

ggplot(df_exp_select, aes(B_prob)) +
  geom_bar()

ggplot(df_exp_select, aes(B_amount)) +
  geom_bar()

# select catch trials, where option A dominates option B
df_catch <- df %>%
  filter(A_prob > B_prob, A_amount > B_amount) %>%
  # compute the expected value of both options, and the EV ratio
  mutate(
    A_EV = A_prob * A_amount,
    B_EV = B_prob * B_amount,
    EV_ratio = (A_EV - B_EV)/((A_EV + B_EV)/2)
  )

# make a histogram to get an idea of the range of the EV ratios
ggplot(df_catch, aes(EV_ratio)) +
  geom_histogram(bins = 10)

#sample a small number of random catch trials - 10 trials selected
df_catch_select <- df_catch[sample(nrow(df_catch), 10), ]

#create final pairs - exp-pairs + catch-pairs (with all cols)
final_pairs <- rbind(df_exp_select, df_catch_select)
# df with relv. cols of amount and prob for each gamble
jsPsych_data_r <- final_pairs[c(1,2,3,4)]

#write final df into a csv (full df)
write_csv(final_pairs, "/Users/akira/Desktop/gamblepairs_exp_catch.csv")
#write final df into a csv (gamble amounts and prob)
write_csv(jsPsych_data_r, "/Users/akira/Desktop/jsPsych_gamble-pairs.csv")
#"/Users/akira/Desktop" - pathname

# transform r object to javascript array
jsPsych_data_js <- toJSON(jsPsych_data_r)
print(jsPsych_data_js)
