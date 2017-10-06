function stringReverse(mystring) {
  var converted=[];
  var final="";
  mystring.split("");
  console.log(mystring);
  for (var i = mystring.length; i != 0; i--) {
    converted.push(mystring[i-1]);
  }
  for (var x =0;  x< converted.length; x++) {
    final += converted[x];
  }
  return final;
}

test = stringReverse("jenalyn");
console.log(test);
