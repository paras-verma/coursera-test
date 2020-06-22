
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      // console.log (names[i]);
      byeSpeaker.speak(names[i]);
    } 
    
    else {
      // console.log (names[i]);
      helloSpeaker.speak(names[i]);
    }
  }

})();
