 player1= localStorage.getItem("username1");
 player2= localStorage.getItem("username2");
 player1score=0;
 player2score=0;
 console.log(player1);
 console.log(player2);
 document.getElementById("player1_name").innerHTML=player1;
 document.getElementById("player2_name").innerHTML=player2;
 document.getElementById("player1_score").innerHTML=player1score;
 document.getElementById("player2_score").innerHTML=player2score;
 question_turn=player1;
 answer_turn=player2;
 document.getElementById("questionturn").innerHTML="Question turn:"+question_turn;
 document.getElementById("answerturn").innerHTML="Answer turn:"+answer_turn;
 function send()
 {
    number1=document.getElementById("put").value; 
    number2=document.getElementById("in").value; 
    answer=parseInt(number1)*parseInt(number2);
    console.log(answer);
    question="<h4>Q."+number1+"X"+number2;
    input="<br><br>Answer:<input id='ans'>";
    sumbit="<br><br><button class='btn btn-info' onclick='yes1()'>sumbit</button>";
div=question+input+sumbit;
 document.getElementById("output").innerHTML=div;
 document.getElementById("put").value="";
 document.getElementById("in").value="";
 
}
function yes1()
{
    answers=document.getElementById("ans").value;
    if(answer==answers)
    {
        console.log("computeranswer="+answer);
        console.log("myanswer="+answers);
        if(answer_turn==player1)
        {
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
        if(answer_turn==player2)
        {
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
        
    }
    if(question_turn==player1)
    {
        question_turn=player2;
        document.getElementById("questionturn").innerHTML="Question turn:"+question_turn;
    }
   else
    {
        question_turn=player1;
        document.getElementById("questionturn").innerHTML="Question turn:"+question_turn;
    }
    if(answer_turn==player1)
    {
        answer_turn=player2;
        document.getElementById("answerturn").innerHTML="Answer turn:"+answer_turn;
    }
    else
    {
        answer_turn=player1;
        document.getElementById("answerturn").innerHTML="Answer turn:"+answer_turn;
    }
}