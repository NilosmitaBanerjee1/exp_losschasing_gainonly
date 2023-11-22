// function for getting responses from the UPPS-P questionnaire
var get_resp_PGSI = function(data, reverse) {
  var responses = JSON.parse(data.responses);
  var resp = responses.Q0;

  // reverse coding
  if (reverse === 1) {
    resp = 5 - resp;
  };

  return resp;

}


var scale_PGSI = ["Never", "Sometimes", "Most of the time", "Almost always"];

 // questions
var Question1 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 1/9:\nHow often have you bet more than you could afford to lose?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 1;
    data.factor = "bet";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var Question2 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 2/9:\nHow often have you needed to gamble with larger amounts of money to get the same feeling of excitement?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 2;
    data.factor = "tolerance";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var Question3 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 3/9:\nHow often have you gone back another day to try to win back the money you lost?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 3;
    data.factor = "chase";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var Question4 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 4/9:\nHow often have you borrowed money or sold anything to get money to gamble?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 4;
    data.factor = "borrowed";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var Question5 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 5/9:\nHow often have you felt you might have a problem with gambling?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 5;
    data.factor = "felt-problem";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var Question6 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 6/9:\nHow often have people criticized your betting or told you that you had a gambling problem, regardless of whether or not you thought it was true?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 6;
    data.factor = "criticized";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var Question7 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 7/9:\nHow often have you felt guilty about the way you gamble or what happens when you gamble?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 7;
    data.factor = "felt-guilty";
    data.resp = get_resp_PGSI(data, 0);
  }
}


var Question8 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 8/9:\nHow often has your gambling caused you any health problems, including stress or anxiety?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 8;
    data.factor = "health-problem";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var Question9 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 9/9:\nHow often has your gambling caused any financial problems for you or your household?",
    labels: scale_PGSI,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'PGSI';
    data.question_number = 9;
    data.factor = "financial-problem";
    data.resp = get_resp_PGSI(data, 0);
  }
}

var PGSI_items = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9];
