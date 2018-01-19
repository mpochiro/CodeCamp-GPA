
var guts = function(){
    var score = document.getElementById("score");
    var answer = document.getElementById("answer")
    var x = "A";
    var a = score.value;
    var q = 0;
    var w = 0;
    var search = /\d+/g;
    var z = a.match(search);



      while (q<z.length) {
        w -= z[q];
      q++}
      w=-w/z.length;


    if (w>90){x="A";}
    else if (w>80){x="B";}
    else if (w>70){x="C";}
    else if (w>60){x="D";}
    else {x="F"};

    w = Math.floor(w);

    answer.innerHTML = "You got a <span style='color:red;'>" + x + "</span> with an average of <span style='color:red'>" + w + "</span>";}

    var returnError = function(){
    guts();
    return false;

                             };
