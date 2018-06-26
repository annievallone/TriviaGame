
 $(document).ready(function() {
         //setting the questions, choices and answers into a variable
var questions = [
        {
        question: "In the year 1900 in the US what was the most popular first names give to boy and girl babies?", 
        choices: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"], 
        answer: "John and Mary",
        correct: "",
      },
        {
        question: "When did the Liberty bell get its name?", 
        choices: ["when it was made in 1701", "when it rang on July 4 1776", "in the 19th century when it became a symbol of the abolition of slavery", "none of the above"], 
        answer: "in the 19th century when it became a symbol of the abolition of slavery",
        correct: "",
},
        {
        question: "In the Roy Rogers-Dale Evans Museum, you will find Roy and Dale stuffed horses. Roy's horse was named trigger what was the name of Dales horse?", 
        choices: ["Buttermilk", "Daisy", "Scout", "Tulip"], 
        answer: "Buttermilk",
        correct: "",
}
      ];

      var results = {
        unanswered: 0,
        correctAnswer: 0,
        incorrectAnswer: 0,
      }
      var number = 30
      var intervalId = 0;
      var gameOver = false;

//start button displays the questions 
      $("#strt").click(function() {
              results.unanswered = 0
              results.correctAnswer = 0
              results.incorrectAnswer = 0
        for(var i=0; i < questions.length; i++ ) {
                var quest = questions[i].question;
                $("#questions").append('<p>' + quest + '</p>')

 
                for(var j=0; j < questions[i].choices.length; j++) {
                        var ch = (questions[i].choices[j])
                        $("#questions").append(
                        "<div class='form-check form-check-inline'>" + 
                        "<input class='form-check-input inlineRadio' type='radio' name='inlineRadioOptions" +i + "'value='" + ch + "'>" +
                        "<label class='form-check-label' form='inlineRadio1' data-value='" + ch + "'>" + ch + "</label></div>")
                        $("#strt")
                }
        }
        $("#questions").append("<button id = 'submit'>Submit </button>");  
        $("#submit").click(submit)
        timer();
})

//submit button function 
function submit() {

        gameOver = true;
        for (var i = 0; i < questions.length; i++) {
               var checked = $("input[type='radio'][name='inlineRadioOptions" + i + "']:checked")
                if (checked.val() == questions[i].answer) {
                        results.correctAnswer++;
                }
                else {
                        results.incorrectAnswer++;
                }

        }
        number = 0 ;
        stop() 
        $("#questions").empty();
        $("#questions").append("<p>Correct answers " + results.correctAnswer +  "<p>");  
        $("#questions").append("<p>Incorrect answers " + results.incorrectAnswer +  "<p>"); 
        }

        function timer() {
                // clearInterval(intervalId);
                // intervalId = setInterval(decrement, 1000);
                // function decrement() {
                //         number--;
                //         $(".game-time").text( + number + " seconds left!");
                //         if (number === 0) {
                //                 clearInterval(intervalId);
                //                 submit();

                                
                                        clearInterval(intervalId);
                                        intervalId = setInterval(decrement, 1000);
                                      }
                                      function decrement() {
                                        if (number < 1 && gameOver == false) {
                                        submit();
                                        stop();
                                        }
                                        else {
                                                number--;
                                        $(".game-time").text( + number + " seconds left!");
                                        }
                                      }
                                      function stop() {
                                        clearInterval(intervalId);
                                        $(".game-time").hide()
                                      }
                                  
        

 })


