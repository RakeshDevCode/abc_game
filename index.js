$(document).keydown(function(event){
   $("h1").text(event.key);
});

$(document).keydown(function(length) {
   var result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   var counter = 0;
   while (counter < length) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
     counter += 1;
   }
   $("h1").text(result);
});


function randomString() {  
   //define a variable consisting alphabets in small and capital letter  
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
     
   //specify the length for the new string  
var lenString = 7;  
var randomstring = '';  

   //loop to select a new character in each iteration  
for (var i=0; i<lenString; i++) {  
var rnum = Math.floor(Math.random() * characters.length);  
randomstring += characters.substring(rnum, rnum+1);  
}  

    //display the generated string   
document.getElementById("randomfield").innerHTML = randomstring;  
}  
