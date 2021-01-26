function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 56, 34, 35, 40, 23, 5];
var result = getArraySum(numbers);
console.log(result);
