function checkCredentials() {  
    const username = prompt("Foydalanuvchi ismini kiriting:"); // Prompt for username  
    const password = prompt("Parolni kiriting:"); 
    
    if (username === "maksad" && password === "54321") {  
        alert("Xush kelibsiz, admin!"); 
    } else {  
        alert("Foydalanuvchi va parol xato!"); 
    }  
}  


checkCredentials();