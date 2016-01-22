var removeVowel = function(string){

  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  var chars = string.split("");
  for (var i=0; i < chars.length; i ++){
    for (var j=0; j < vowels.length; j ++){
      if (chars[j] === vowels[i]){
        chars.splice(j, 1, "-");
      }
    }
  }return chars.join("");
};



$(document).ready(function() {
  $("form#message").submit(function(event){
    var userMessage = $("#userInput").val();
    var result = removeVowel(userMessage);
    $(".result").text(result);
    event.preventDefault();
  });
});
