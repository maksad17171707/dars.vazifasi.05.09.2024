const year = +prompt('yil kiriting');  

const isKabisa = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);  

console.log(`${year} yili ${isKabisa ? 'kabisa yilidir.' : 'kabisa yili emas.'}`);