function login()
{
    player1=document.getElementById("player1").value
    player2=document.getElementById("player2").value
    localStorage.setItem("username1",player1);
    localStorage.setItem("username2",player2);
    window.location="gamepage.html";
    
}