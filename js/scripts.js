var removeVowel = function(string){

  var vowels = ["a","e","i","o","u","A","E","I","O","U"]
  var chars = string.split("")
  for (var i=0; i < chars.length; i ++){
    for (var j=0; j < vowels.length; j ++){
      if (chars[j] === vowels[i]){
        debugger;
        chars.splice(j, 1, "-");
      }
    }
  }return chars.join("");
};
