
var phrase = process.argv.slice(2).join(' ')


function countLetters(sentence) {
  var letterCounter = {}
  for(var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== ' ') {
      if (letterCounter[sentence.charAt(i)]) {
        letterCounter[sentence.charAt(i)].push(i)
        //key, then push the new position
        //old: letterCounter[sentence.charAt(i)] = letterCounter[sentence.charAt(i)] + 1
      } else {
        letterCounter[sentence.charAt(i)] = [i]
        //create key = [position for the letter]
        //old: letterCounter[sentence.charAt(i)] = 1
       }
     }
   }
  return letterCounter
}
console.log(countLetters(phrase))
