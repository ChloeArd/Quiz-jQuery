let quizAnimaux = [
    {"numero" : 1, "Question" : "Quel est la famille du chien ?", "choix1" : "Félidé", "choix2" : "Canidé", "choix3" : "Bovin", "choix4" : "Amphibien", "image" : "https://images.unsplash.com/photo-1506903536293-8419385acdce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 2, "Question" : "Comment s'appelle l'ancêtre de tous les êtres vivants ?", "choix1" : "LOLA", "choix2" : "LUCA", "choix3" : "ZOE", "choix4" : "REMI", "image" : "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 3, "Question" : "Comment appelle-t-on les animaux voyant la nuit ?", "choix1" : "Nyctalope", "choix2" : "Negrophile", "choix3" : "Nocturne", "choix4" : "Fisdupe", "image" : "https://images.unsplash.com/photo-1571659315127-8e882c129e0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8b3dsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 4, "Question" : "Quel animal ne vole pas ?", "choix1" : "Le pingouin", "choix2" : "La cigogne", "choix3" : "Le pélican", "choix4" : "Le manchot", "image" : "https://images.unsplash.com/photo-1582487809094-520150fdb872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVuZ3VpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 5, "Question" : "Combien une pieuvre possède-t-elle de tentacules ?", "choix1" : "12", "choix2" : "10", "choix3" : "8", "choix4" : "6", "image" : "https://images.unsplash.com/photo-1583180527676-8dbfe98c2c87?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8b2N0b3B1c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 6, "Question" : "Comment appelle-t-on les 'pattes' d'un rapace ?", "choix1" : "Les serres", "choix2" : "Les aiguises", "choix3" : "Les griffes", "choix4" : "Les attrapes-tous", "image" : "https://images.unsplash.com/photo-1546930712-6be020e9538a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fHJhcHRvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 7, "Question" : "Quel nom porte l’habitat du castor ?", "choix1" : "Une tanière", "choix2" : "Une aire", "choix3" : "Une hutte", "choix4" : "Un terrier", "image" : "https://images.unsplash.com/photo-1563155853-f7f8955967ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXZlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 8, "Question" : "Comment appelle-t-on la femelle du sanglier ?", "choix1" : "La sanglia", "choix2" : "La marcasse", "choix3" : "La truie", "choix4" : "La laie", "image" : "https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9hcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 9, "Question" : "Quels sont les deux sens du chat les plus développés ?", "choix1" : "L'ouïe et le toucher", "choix2" : "La vue et l'ouïe", "choix3" : "L'odorat et le goût'", "choix4" : "La vue et le toucher", "image" : "https://images.unsplash.com/photo-1547045662-e5a75e7238c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 10, "Question" : "Quel est le cri de la brebis ?", "choix1" : "Le bêlement", "choix2" : "Le beuglement", "choix3" : "Le vagissement", "choix4" : "Le jappement", "image" : "https://images.unsplash.com/photo-1543305235-49385f50ccdc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIyfHxzaGVlcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
]
let index = 0;
let buttonNext = $("#enterNext");
let result = $("#result");
let choice1 = $("#choice1");
let choice2 = $("#choice2");
let choice3 = $("#choice3");
let choice4 = $("#choice4");
let score = 0;

//Question 1
$("#numero").html(quizAnimaux[0].numero);
$("#questions").html(quizAnimaux[0].Question);
$("#labelChoice1").html(quizAnimaux[0].choix1);
$("#labelChoice2").html(quizAnimaux[0].choix2);
$("#labelChoice3").html(quizAnimaux[0].choix3);
$("#labelChoice4").html(quizAnimaux[0].choix4);
$("#imageQuestion").attr("src", quizAnimaux[0].image);

let answerQuestion1 = quizAnimaux[0].choix2;
let answerQuestion2 = quizAnimaux[1].choix2;
let answerQuestion3 = quizAnimaux[2].choix1;
let answerQuestion4 = quizAnimaux[3].choix4;
let answerQuestion5 = quizAnimaux[4].choix3;
let answerQuestion6 = quizAnimaux[5].choix1;
let answerQuestion7 = quizAnimaux[6].choix4;
let answerQuestion8 = quizAnimaux[7].choix4;
let answerQuestion9 = quizAnimaux[8].choix2;
let answerQuestion10 = quizAnimaux[9].choix2;

buttonNext.click(function () {
    answerQuiz(0, choice2)
    if(index === 9){
        result.css({"display" : "block"});
        buttonNext.css({"display" : "none"});
    }
    else if(index === quizAnimaux.length - 1){
        alert("fini");
    }
    else {
        index ++;
    }
    $("#numero").html(quizAnimaux[index].numero);
    $("#questions").html(quizAnimaux[index].Question);
    $("#labelChoice1").html(quizAnimaux[index].choix1);
    $("#labelChoice2").html(quizAnimaux[index].choix2);
    $("#labelChoice3").html(quizAnimaux[index].choix3);
    $("#labelChoice4").html(quizAnimaux[index].choix4);
    $("#imageQuestion").attr("src", quizAnimaux[index].image);
})


function answerQuiz(i, id){
    if(index === i){
        if(id.is(':checked') ){
            alert("Bonne réponse !");
            score++;
            console.log(score);
        }
        else {
            alert("Mauvaise réponse !");
        }
    }
}

