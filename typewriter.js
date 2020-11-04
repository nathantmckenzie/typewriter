const sentence = "hello there from lighthouse labs";
var delay = 0;
for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay += 50); 

  }
  setTimeout(() => {
    console.log();
  }, sentence.length * 50);



//function type()
//{
//    document.getElementById('screen').innerHTML += text.charAt(index);
//    index += 1;
//    var t = setTimeout('type()',100);
//}