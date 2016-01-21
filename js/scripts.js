var removeVowel = function(string){
  var vowels = ["a","e","i","o","u","A","E","I","O","U"]
  for (var i =0; i < vowels.length; i ++){
    for (var j=0; j< string.length; j ++){
      if (string.charAt([i]) === vowels[j]){
        return true
      }
    }
  }
}
