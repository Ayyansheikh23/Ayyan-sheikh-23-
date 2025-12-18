// LOOP

// for loop

// for(var i = 0; i <= 10; i++){
//     document.write(i + 'hello'+ '<br>');
// }

// for (var i = 10; i >= 0; i--){
//     document.write(i + 'hello'+ '<br>');
// }

// var arr =['civic' , 'aqua', 'sonata' , 'sportage', 'v8'];

// for(var i = 0; i <= arr.length; i++){
//     document.write(arr[i]+'<br>')
// }

// for (var i = 1; i <= 10; i++ ){
//     document.write(2 + 'x' + i + ' = ' + 2 * i + '<br>')
// }

var userInput = +prompt('enter the number')
var userLength = +prompt('enter the length')

for (var i = 1; i <= userLength; i++ ){
    document.write(userInput + 'x' + i + ' = ' + userInput * i + '<br>')
}

