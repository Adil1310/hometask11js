// 1. Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, 
// в которой линии разделяются символами новой строки. На каждой позиции либо пробел, 
// либо #. В результате должна получиться шахматная доска.

let a = '#';
let b = ' ';
let result = '';
let row = true;
 for (let i = 0; i < 8; i++) {
   for (let j = 0; j < 8; j++) {
     if ((j+row) % 2 == 0) {
       result = result + b;
     } else {
       result = result + a;
     }
   }
   console.log(result);
   result='';
   row = ! row;
}

// 2. FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, 
// с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – 
// ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

function fizzBuzz(){
     for (let i = 1; i <= 100; i++){
         if(i % 3 == 0){
             console.log('Fizz');
         }else if(i % 5 == 0){
             console.log('Buzz');
         }else if(i % 3 == 0 && i % 5 == 0){
             console.log('FizzBuzz');
         }else{
             console.log(i);
         }
     }
 }
fizzBuzz()

// 3. Напишите функцию JavaScript, которая проверяет, является ли переданная строка палиндромом? 
// Палиндром - это слово, фраза или последовательность, которые читаются так же, как вперед, назад, например, level.

function myFunc(palindrom)
{

    for( let i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
            console.log('Палиндромом.');
        }else{
            console.log('Не палиндромом.');
        }
    }
}
checkPalindrom(prompt());
