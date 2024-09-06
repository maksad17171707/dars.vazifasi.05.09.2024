let son = +prompt("Iltimos, son kiriting:");  

let isEven = (son % 2 === 0);  
let sum = 0;  
let num = son;  

while (num > 0) {  
    let raqam = num % 10;  
    num = (num - raqam) / 10;   
    sum += raqam;   
}  

if (isEven || (sum % 2 === 0)) {  
    console.log("Juft son");  
} else {  
    console.log("Juft son emas");  
}