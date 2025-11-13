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
