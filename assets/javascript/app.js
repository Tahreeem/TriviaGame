$(document).ready(function () {
    $(".btn.btn-secondary").click(ShowFormAndTimer);

    $(".btn.btn-primary").click(CheckResults);
   
});


function ShowFormAndTimer() {
    $(".TempButtonRow").remove();
    $(".TriviaForm").removeClass("invisible");

    var TimeRemaining = 30;
    var Timer = setInterval(function () {
        TimeRemaining--;
        $("div.col-12 span").text(TimeRemaining);
        if (TimeRemaining == 0) {
            clearInterval(Timer);
            CheckResults();
        }
    }, 1000);

    
};


function CheckResults() {
    var correct = 0;
    var incorrect = 0;

    if ($("#optionsHeisenberg3").prop("checked") === true) {
        correct++;
    }
    if ($("#optionsSpooky4").prop("checked") === true) {
        correct++;
    }


    /*var children = $("div.form-check").children();
    for (i = 0; i < children.length; children++) {
        if (children[i].prop("checked") === true) {
            children[i].
        }
    }*/



    //$(".TriviaForm").addClass("invisible");
    $("div.col-12").text("Correct Answers: " + correct);
    /*$("div.col-12").append("<br>");
    $("div.col-12").append("Incorrect Answers: " + (2 - correct - unanswered));
    $("div.col-12").append("<br>");
    $("div.col-12").append("Unanswered " + unanswered);*/

}