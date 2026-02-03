


// async function getUsers(){
// const res = await fetch("http://localhost:8080/user",{
//     headers:{
//         token:"idan"
//     }
// })
// const users = await res.json()
// console.log(users);

// }

// getUsers()
















async function addUser(){
    const res =await fetch('http://localhost:8080/addUser',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"idan",
            age:21
        })
    })
    const data = await res.json()
    console.log(data);
    console.log(res.status);

    
}

addUser()




