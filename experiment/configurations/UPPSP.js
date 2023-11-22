// function for getting responses from the UPPS-P questionnaire
var get_resp = function(data, reverse) {
  var responses = JSON.parse(data.responses);
  var resp = responses.Q0 + 1; // javaScript uses 0-based indexing. Change into 1-based indexing

  // reverse coding
  if (reverse === 1) {
    resp = 5 - resp;
  };

  return resp;

}

var scale_1 = ["Agree strongly", "Agree some", "Disagree some", "Disagree strongly"];

 // questions
var Question1 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 1/20:\nI usually like to see things through to the end.",
    labels: scale_1,
    required: true,
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 1;
    data.reverse = 0;
    data.factor = "Perseverance";

    data.resp = get_resp(data, data.reverse);
  }
}

var Question2 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 2/20:\nMy thinking is usually careful and purposeful.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 2;
    data.reverse = 0;
    data.factor = "Premeditation";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question3 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 3/20:\nWhen I am in a great mood, I tend to get into situations that could cause me problems.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 3;
    data.reverse = 1;
    data.factor = "Positive Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question4 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 4/20:\nUnfinished tasks really bother me.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 4;
    data.reverse = 0;
    data.factor = "Perseverance";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question5 = {
  type: 'survey-likert',
  questions: [{
    prompt: "Q 5/20:\nI like to stop and think things over before I do them.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 5;
    data.reverse = 0;
    data.factor = "Premeditation";

    data.resp = get_resp(data, data.reverse);
  }
};


var Question6 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 6/20:\nWhen I feel bad, I quite often do things I later regret in order to make myself feel better now.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 6;
    data.reverse = 1;
    data.factor = "Negative Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};


var Question7 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 7/20:\nOnce I get going on something I hate to stop.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 7;
    data.reverse = 0;
    data.factor = "Perseverance";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question8 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 8/20:\nSometimes when I feel bad, I can't seem to stop what I am doing even though it is making me feel worse.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 8;
    data.reverse = 1;
    data.factor = "Negative Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question9 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 9/20:\nI quite enjoy taking risks.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 9;
    data.reverse = 1;
    data.factor = "Sensation Seeking";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question10 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 10/20:\nI tend to lose control when I am in a great mood.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 10;
    data.reverse = 1;
    data.factor = "Positive Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};


var Question11 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 11/20:\nI finish what I start.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 11;
    data.reverse = 0;
    data.factor = "Perseverance";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question12 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 12/20:\nI tend to value and follow a rational, 'sensible' approach to things.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 12;
    data.reverse = 0;
    data.factor = "Premeditation";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question13 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 13/20:\nWhen I am upset I often act without thinking.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 13;
    data.reverse = 1;
    data.factor = "Negative Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question14 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 14/20:\nI welcome new and exciting experiences and sensations, even if they are a little frightening and unconventional.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 14;
    data.reverse = 1;
    data.factor = "Sensation Seeking";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question15 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 15/20:\nWhen I feel rejected, I will often say things that I later regret.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 15;
    data.reverse = 1;
    data.factor = "Negative Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question16 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 16/20:\nI would like to learn to fly an airplane.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 16;
    data.reverse = 1;
    data.factor = "Sensation Seeking";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question17 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 17/20:\nOthers are shocked or worried about the things I do when I am feeling very excited.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 17;
    data.reverse = 1;
    data.factor = "Positive Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question18 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 18/20:\nI would enjoy the sensation of skiing very fast down a high mountain slope.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 18;
    data.reverse = 1;
    data.factor = "Sensation Seeking";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question19 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 19/20:\nI usually think carefully before doing anything.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 19;
    data.reverse = 0;
    data.factor = "Premeditation";

    data.resp = get_resp(data, data.reverse);
  }
};

var Question20 = {
  type: 'survey-likert',
    questions: [{
    prompt: "Q 20/20:\nI tend to act without thinking when I am really excited.",
    labels: scale_1,
    required: true
  }, ],
  on_finish: function(data) {
    data.task = 'UPPSP';
    data.question_number = 20;
    data.reverse = 1;
    data.factor = "Positive Urgency";

    data.resp = get_resp(data, data.reverse);
  }
};


var UPPSP_items = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10,
  Question11, Question12, Question13, Question14, Question15, Question16, Question17, Question18, Question19, Question20];
