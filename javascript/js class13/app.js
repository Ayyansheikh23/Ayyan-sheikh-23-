// nested loop

// print arr1 element with both arr2 elements

var arr1 = ['jazz', 'zong', 'warid'];
var arr2 = ['telenor', 'ufone'];

// for(var i = 0; i < arr1.length; i++){     //outer loop
//     for(var j = i; j < arr2.length; j++){
//         document.write(arr2[j])
//     }
//     document.write('<br>')
// }

// for(var i = 0; i < arr1.length; i++){  
//     for(var j = i; j < arr2.length; j++){
//         document.write(arr2[i] + arr2[j] + '<br>')
//     }
//     document.write('<br>')
// }


// counting

for(var i = 1; i <= 100; i = i +10){
   for (var j = i; j < i + 10; j++ ){
   document.write(j +'<br>');
   }
   document.write('<br>');
} 