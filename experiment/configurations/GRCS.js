// function for getting responses from the GRCS questionnaire
var get_resp_GRCS = function(data) {

  var responses = JSON.parse(data.responses);
  var resp = responses.Q0 + 1; // javaScript uses 0-based indexing. Change into 1-based indexing

  /* in the original GRCS questionnaire,
   1 = strongly disagree;
   2 = moderately disagree;
   3 = mildly disagree;
   4 = neither agree or disagree;
   5 = mildly  agree;
   6 = moderately agree;
   7 = strongly agree;
   Here we reversed the order of the categories to be consistent with the UPPS-P questionnaire.
   Reverse-code all the items to be consistent with the original categories.
  */

  resp = 8 - resp;

  return resp;

}

var scale_2 =  ["strongly agree", "moderately agree", "mildly agree", "neither agree nor disagree", "mildly disagree", "moderately disagree", "strongly disagree"];

 // questions

var GRCS_Q4 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 1/6:\nLosses when gambling, are bound to be followed by a series of wins.",
    labels: scale_2,
    required: true
  }, ],
  on_finish: function(data){
    data.task = 'GRCS';
    data.question_number = 4;
    data.resp = get_resp_GRCS(data);
  }
};


var GRCS_Q9 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 2/6:\nA series of losses will provide me with a learning experience and that will help me win later.",
    labels: scale_2,
    required: true
  }, ],
  on_finish: function(data){
    data.task = 'GRCS';
    data.question_number = 9;
    data.resp = get_resp_GRCS(data);
  }
};


var GRCS_Q14 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 3/6:\nWhen I have a win once, I will definitely have a win again.",
    labels: scale_2,
    required: true
  }, ],
  on_finish: function(data){
    data.task = 'GRCS';
    data.question_number = 14;
    data.resp = get_resp_GRCS(data);
  }
};


var GRCS_Q19 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 4/6:\nThere are times that I feel lucky and thus, gamble those times only.",
    labels: scale_2,
    required: true
  }, ],
  on_finish: function(data){
    data.task = 'GRCS';
    data.question_number = 19;
    data.resp = get_resp_GRCS(data);
  }
};


var GRCS_Q22 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 5/6:\nI have some control over predicting my gambling wins.",
    labels: scale_2,
    required: true
  }, ],
  on_finish: function(data){
    data.task = 'GRCS';
    data.question_number = 22;
    data.resp = get_resp_GRCS(data);
  }
};


var GRCS_Q23 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 6/6:\nIf I keep changing my guesses, I have less chance of winning than if I keep the same guesses every time.",
    labels: scale_2,
    required: true
  }, ],
  on_finish: function(data){
    data.task = 'GRCS';
    data.question_number = 23;
    data.resp = get_resp_GRCS(data);
  }
};

var GRCS_items = [GRCS_Q4, GRCS_Q9, GRCS_Q14, GRCS_Q19, GRCS_Q22, GRCS_Q23];
