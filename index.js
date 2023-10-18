$("h1").on("click",function(){
{function randomtext() {
    var random1="ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789";
    var num1=Math.floor(Math.random()*62)+1;
    return random1[num1];
    }
$("h1").text(randomtext()); }
});

$(document).keydown(function(event){
    $("h2").text(event.key);
 });
