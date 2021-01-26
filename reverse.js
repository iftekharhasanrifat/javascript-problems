function reverseString(str) {
    var reverse = "";
    for(var i=0;i<str.length;i++){
        var char = str[i];
        reverse = str[i]+reverse;
    }
    return reverse;
}
var statement = "Hello alien brothers";
var result = reverseString(statement);
console.log(result);