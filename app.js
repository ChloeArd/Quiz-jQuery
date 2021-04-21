let quizAnimals = [
    {"number" : 1, "Question" : "Quel est la famille du chien ?", "choice1" : "Félidés", "choice2" : "Canidés", "choice3" : "Bovin", "choice4" : "Amphibien", "image" : "https://images.unsplash.com/photo-1506903536293-8419385acdce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 2, "Question" : "Comment s'appelle l'ancêtre commun à tous les êtres vivants ?", "choice1" : "LOLA", "choice2" : "LUCA", "choice3" : "ZOE", "choice4" : "REMI", "image" : "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 3, "Question" : "Comment appelle-t-on les animaux voyant la nuit ?", "choice1" : "Nyctalope", "choice2" : "Negrophile", "choice3" : "Nocturne", "choice4" : "Fisdupe", "image" : "https://images.unsplash.com/photo-1571659315127-8e882c129e0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8b3dsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 4, "Question" : "Quel animal ne vole pas ?", "choice1" : "Le pingouin", "choice2" : "La cigogne", "choice3" : "Le pélican", "choice4" : "Le manchot", "image" : "https://images.unsplash.com/photo-1582487809094-520150fdb872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVuZ3VpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 5, "Question" : "Combien une pieuvre possède-t-elle de tentacules ?", "choice1" : "12", "choice2" : "10", "choice3" : "8", "choice4" : "6", "image" : "https://images.unsplash.com/photo-1548645933-c62d4468cbb9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8b2N0b3B1c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 6, "Question" : "Comment appelle-t-on les 'pattes' d'un rapace ?", "choice1" : "Les serres", "choice2" : "Les aiguises", "choice3" : "Les griffes", "choice4" : "Les attrapes-tous", "image" : "https://images.unsplash.com/photo-1546930712-6be020e9538a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fHJhcHRvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 7, "Question" : "Quel nom porte l’habitat du castor ?", "choice1" : "Une tanière", "choice2" : "Une aire", "choice3" : "Une hutte", "choice4" : "Un terrier", "image" : "https://images.unsplash.com/photo-1563155853-f7f8955967ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXZlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 8, "Question" : "Comment appelle-t-on la femelle du sanglier ?", "choice1" : "La sanglia", "choice2" : "La marcasse", "choice3" : "La truie", "choice4" : "La laie", "image" : "https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9hcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 9, "Question" : "Quels sont les deux sens du chat les plus développés ?", "choice1" : "L'ouïe et le toucher", "choice2" : "La vue et l'ouïe", "choice3" : "L'odorat et le goût", "choice4" : "La vue et le toucher", "image" : "https://images.unsplash.com/photo-1547045662-e5a75e7238c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"number" : 10, "Question" : "Quel est le cri de la brebis ?", "choice1" : "Le bêlement", "choice2" : "Le beuglement", "choice3" : "Le vagissement", "choice4" : "Le jappement", "image" : "https://images.unsplash.com/photo-1543305235-49385f50ccdc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIyfHxzaGVlcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
];

let index = 0;
let buttonNext = $("#enterNext");
let result = $("#result");
let choice1 = $("#choice1");
let choice2 = $("#choice2");
let choice3 = $("#choice3");
let choice4 = $("#choice4");
let answerAll = $("#answerAll");
let score = 0;

//Question 1
$("#numero").html(quizAnimals[0].number);
$("#questions").html(quizAnimals[0].Question);
$("#labelChoice1").html(quizAnimals[0].choice1);
$("#labelChoice2").html(quizAnimals[0].choice2);
$("#labelChoice3").html(quizAnimals[0].choice3);
$("#labelChoice4").html(quizAnimals[0].choice4);
$("#imageQuestion").attr("src", quizAnimals[0].image);

//animation
$("#question2").fadeOut();
$("#question2").fadeIn();

//the answer to each question
let answerQuestion1 = quizAnimals[0].choice2;
let answerQuestion2 = quizAnimals[1].choice2;
let answerQuestion3 = quizAnimals[2].choice1;
let answerQuestion4 = quizAnimals[3].choice4;
let answerQuestion5 = quizAnimals[4].choice3;
let answerQuestion6 = quizAnimals[5].choice1;
let answerQuestion7 = quizAnimals[6].choice3;
let answerQuestion8 = quizAnimals[7].choice4;
let answerQuestion9 = quizAnimals[8].choice2;
let answerQuestion10 = quizAnimals[9].choice1;

//When we press enter, we go to the next quiz and we check if the answer is right or wrong
buttonNext.click(function () {
    answerQuiz(0, choice2, answerQuestion1); //answers qst 1
    answerQuiz(1, choice2, answerQuestion2); //answers qst 2
    answerQuiz(2, choice1, answerQuestion3); //answers qst 3
    answerQuiz(3, choice4, answerQuestion4); //answers qst 4
    answerQuiz(4, choice3, answerQuestion5); //answers qst 5
    answerQuiz(5, choice1, answerQuestion6); //answers qst 6
    answerQuiz(6, choice3, answerQuestion7); //answers qst 7
    answerQuiz(7, choice4, answerQuestion8); //answers qst 8
    answerQuiz(8, choice2, answerQuestion9); //answers qst 9
    answerQuiz(9, choice1, answerQuestion10); //answers qst 10

    if(index === 9) {
        $("#titleQuestion").html("");
        $("#questions").css("display", "none");
        $("#answer").css("display", "none");
        $("#image").css("display", "none");
        result.css({"display": "block"});
        buttonNext.css({"display": "none"});
    }
    else {
        index ++;
    }
    $("#question2").fadeOut(300);
    $("#question2").fadeIn(1000);
    $("#numero").html(quizAnimals[index].number);
    $("#questions").html(quizAnimals[index].Question);
    $("#labelChoice1").html(quizAnimals[index].choice1);
    $("#labelChoice2").html(quizAnimals[index].choice2);
    $("#labelChoice3").html(quizAnimals[index].choice3);
    $("#labelChoice4").html(quizAnimals[index].choice4);
    $("#imageQuestion").attr("src", quizAnimals[index].image);
    $("input:radio").prop("checked", false);
});

//When you press result, the final score is displayed and the answers too
result.click(function () {
    $("#question2").css({"display" : "none"});
    $("#score").html(score);
    $("#resultFinal").css({"display" : "block"});
    answerAll.css({"display" : "block"});
    answerAll.append("<p id='final'>Les réponses étaient : </p>");
    answerAll.append("<p>Question 1 : " + answerQuestion1 + "</p>");
    answerAll.append("<p>Question 2 : " + answerQuestion2 + "</p>");
    answerAll.append("<p>Question 3 : " + answerQuestion3 + "</p>");
    answerAll.append("<p>Question 4 : " + answerQuestion4 + "</p>");
    answerAll.append("<p>Question 5 : " + answerQuestion5 + "</p>");
    answerAll.append("<p>Question 6 : " + answerQuestion6 + "</p>");
    answerAll.append("<p>Question 7 : " + answerQuestion7 + "</p>");
    answerAll.append("<p>Question 8 : " + answerQuestion8 + "</p>");
    answerAll.append("<p>Question 9 : " + answerQuestion9 + "</p>");
    answerAll.append("<p>Question 10 : " + answerQuestion10 + "</p>");
    answerAll.append("<img src='https://tse1.mm.bing.net/th?id=OIP.6VoUv1SLxrkw3NajqRjYBAHaE7&pid=Api&P=0&w=243&h=163'> Merci pour t'as participation !")
});

//check if the answer is right or wrong
function answerQuiz(i, id, answer){
    if(index === i){
        if(id.is(':checked')){
            $(".modal-body").html("Bonne réponse !");
            score++;
        }
        else {
            $(".modal-body").html("Mauvaise réponse ! C'était " + answer + "." );
        }
    }
}