function signup(userName){
    let registeredUsers=["swetha","john","swathi"]
    if(registeredUsers.includes(userName)){
        return "User Already Registered. Please Login"
    }else{
        registeredUsers.push(userName)
        return "Sigup Successful, Please Login"
    }
}

console.log(signup("john"))
console.log(signup("ravi"))


function login(userName,password){
    let registeredUsers=["swetha","john","swathi"]
    if(!registeredUsers.includes(userName)){
        return "User Not Found, Please signup"
    }else if(password!="Emp@123"){
        return "Wrong Password...."
    }else{
        return "Login Successfull...."
    }
}

console.log(login("swetha","Emp@123"))
console.log(login("john","1234"))
console.log(login("swathi","Emp@123"))
