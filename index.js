const userDatabase = [
    {
        username : "sofih-ii",
        password : "130222",
    },
    {
        username : "peep45",
        password : "09870",
    },
    {
        username : "kiki_23",
        password : "45621",
    },
]
    

const userTimeline = [
    {
        username : "Lili",
        timeline : "Hi",
    },
    {
        username : "Carlos",
        timeline : "how are you?",
    },
    {
        username : "Paola",
        timeline : "sorry!!",
    },
]

const username = prompt("What is your username: ");
const password = prompt("what is your password: ");

function userExisting (username, password){
    for(let i = 0; i < userDatabase.length; i++){
        if(userDatabase[i].username === username && userDatabase[i].password === password){
            return true
            
        }
    }
    return false;
}
function singIn(username, password){
    if(userExisting[username, password]){
        alert(`welcome to your account: ${username} `);
        console.log(userTimeline);
    }else{
        console.log("username or password incorrect")
    }
}
singIn(username, password);