let allQuizes = ["quiz_1", "quiz_2", "quiz_3", "quiz_4"]

function activateStartButton(id) {
    document.getElementById("button_start_quiz_id").disabled = false;
    document.getElementById(id).style = "color: white";
}

