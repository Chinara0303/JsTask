//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
// let isNumberDivideThreeOrSeven = (num) => {
//     if (num % 21 == 0) {
//         return true;
//     }
//     return false
// }
// let num = 22;
// console.log(isNumberDivideThreeOrSeven(num));

// function isNumberDivideThreeOrSeven(num) {
//     if (num % 21 == 0) {
//         return true;
//     }
//     return false
// }

// let num = 21;
// console.log(isNumberDivideThreeOrSeven(num));


//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
// let getNumFactorial = (num) =>{
//     let multiple =1;
//     for (let i = 1; i <= num; i++) {
//         multiple*=i;   
//     }
//     console.log(multiple);
// }
// let num =5;
// getNumFactorial(num)

// function getNumFactorial(num) {
//     let multiple =1;
//     for (let i = 1; i <= num; i++) {
//         multiple*=i;   
//     }
//     console.log(multiple);
// }
// let num =5;
// getNumFactorial(num)

//3) Her hansisa number elementleri olan arayin icindeki
// cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
// let sumEvenNumbersSquareFromArray = (array) =>{
//     let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] % 2 == 0) {
//                 sum += array[i];
//             }
//         }
//         let square =sum**2;
//         console.log(square);
// }
//  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  sumEvenNumbersSquareFromArray(nums)

// function sumEvenNumbersSquareFromArray(array){
//     let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] % 2 == 0) {
//                 sum += array[i];
//             }
//         }
//         let square =sum**2;
//         console.log(square);
// }
//  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  sumEvenNumbersSquareFromArray(nums)


//4) Funtiona-a  mail ve password gelir. 
//Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, 
//eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// let login=(email,password)=>{
//     if (email == "cavid@code.edu.az" && password == 12345) {
//         console.log("Girish olundu");
//     }
//     else{
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }
// let email ="cavid@code.edu.az";
// let password =12345;
// login(email, password);

// function login(email, password) {
//     if (email == "cavid@code.edu.az" && password == 12345) {
//         console.log("Girish olundu");
//     }
//     else {
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }
// let email ="cavid@code.edu.az";
// let password =12345;
// login(email, password);


//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let sumOddNumsFrommArray = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 1) {
//             sum += array[i];
//         }
//     }
//     console.log(sum);
// }
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sumOddNumsFrommArray(nums);

// function sumOddNumsFrommArray (array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 1) {
//             sum += array[i];
//         }
//     }
//     console.log(sum);
// }
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sumOddNumsFrommArray(nums);


//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
// let countEvenNumsFrommArray = (array) => {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// countEvenNumsFrommArray(nums);

// function countEvenNumsFrommArray(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// countEvenNumsFrommArray(nums);

