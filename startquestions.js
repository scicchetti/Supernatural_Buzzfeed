/* Buzzfeed Quiz
Create a Buzzfeed Quiz with 5 questions. Create a method for determining what
the results will be. Combine our knowledge of HTML, JS, and CSS to get hired at
Buzzfeed.
1. Finish the function 'creatQuestions'
  a. Make sure you have a list of dictionary of questions
  b. Create the questions and options (aka the radio buttons) DYNAMICALLY
  in JavaScript. In other words, don't hard code the questions; we want to use
  code to access our list of dictionary of questions.
      (HINT 1: HTML is just a bunch of STRINGS. Create HTML code with JS by
      creating strings with tags i.e. ('<input type="radio" name="group" value ="asdf"'))
      (HINT 2: Group the radio button inputs for each question using the SAME name
       or class)
  c. Make sure our changes are reflected in the HTML
      (HINT: getElementById and change its innerHTML)
  d. Call this function WHEN THE PAGE LOADS!!!!
      (HINT: wrap the function in paranthesis like in Overwatch Hero workshop)
2. Define the function 'submitAnswer'
  a. We want to iterate through each group of questions to see what the user
  selected.
  (HINT: a selected answer is "checked"; look up checked radio button)
  b. Determine how your Buzzfeed personality is predicted
      ideas (easy): Assign points to each of your option. If an option makes the
      user a Broccoli, assign a low point (0,1). If an option makes the user a Carrot,
      assign medium high points (4,5). If an option makes the user a Celery,
      assign high points (10). All numbers selected are arbitrary; you decide.
          0-15 points = Broccoli
          16-30 points = Carrot
          30-45 points = Celerey
      ideas (medium):
          Determine which value was selected the MAXIMUM times
          Need to handle TIES.
3. Make more questions, add CSS, add images, use BootStrap
*/
(function createQuestions(){

  /*TODO: ADD MORE QUESTIONS. Create a field for images*/

  var questions = [
    {
      "question": "Whats your personality type",
      "name": "personality",
      "answers" : {
        "Happy but insecure": 0,
        "Passionate and nerdy": 5,
        "Happy and family focused": 10
      }
    },
    {
      "question": "Whats your hair color",
      "name": "color",
      "answers" : {
        "Brown/Black": 5,
        "Blonde/Red": 2,
        "Dyed color": 8
    }
  },
  {
      "question": "Whats your favorite snack",
      "name": "snack",
      "answers" : {
        "Donuts": 0,
        "Alcohol": 10,
        "Healthy snacks": 5
    }
  }
  ];

  var html = "";
  for (var i = 0; i < questions.length; i++){
    html += questions[i]["question"] + "</br>" ; /* TODO: Place your question here*/
    for (var key in questions[i]["answers"]){
      html += '<input type="radio" name="' + questions[i]["name"] + '" value="';
      html += questions[i]["answers"][key] + '">' + key + "<br>";
    }
  }

  /* TODO: set the element "survey" 's innerHTML to html'*/
document.getElementById("quiz"). innerHTML = html;
})();

function tacoBell(){
  var total = 0;
  var categories = ["snack", "color", "personality"];

for (var j = 0; j < categories.length; j ++){
  var cat = document.getElementsByName(categories[j]);
  for (var i = 0; i < cat.length; i++){
    if (cat[i].checked){
    total += parseInt(cat[i].value)
    }
  }
}

  /* TODO:  Determine your winning "personality" */
var Supernatural;
if (total < 25){
  Supernatural = "DONNA!!";
} else if (total < 50){
    Supernatural = "JODY!!";
} else {
    Supernatural = "CHARLIE!!";
}
  for (var i = 0; i < categories.length; i++){
    document.getElementsByName(categories[i]);
  }


  /*TODO: Replace the empty quotes with the result of the quiz*/
  document.getElementById("results").innerHTML = "YOU ARE " + Supernatural ;
  var image;

  if (Supernatural == "DONNA!!"){
      image = "Donna.gif";
    //  background-image: url("Donna.gif");
  }else if (Supernatural == "JODY!!"){
  //    background-image: url("Jody.gif");
      image = "Jody.gif";
  }else if (Supernatural == "CHARLIE!!"){
      //background-image: url("Charlie.gif");
      image = "Charlie.gif";
    } else {
      image ="Charlie.gif";
    }
    document.getElementById("imgresult").innerHTML = "<img src=" + image + ">";

}
