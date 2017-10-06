function firstFactorial(num) {
    var fact = [];
    var final = 1;
    for (var i = 0; i < num; i++) {
        fact[i] = num - i;
        console.log(fact[i]);
        final *= fact[i];
    }
    for (var i = 0; i < fact.length; i++) {
      fact[i]
    }
    return final;
}



var output = firstFactorial(8);
console.log(output);
