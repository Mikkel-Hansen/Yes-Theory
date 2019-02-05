let objUsers = [ //Create array of objects called objUsers
        {
        username: "Mikkel", //object property username
        password: "mikkel123" //object property password
        },
        {
        username: "Underviser", //object property username
        password: "qazwsx123" //object property password
        },
        {
        username: "Bruger", //object property username
        password: "bruger123" //object property password
        }
            ];
        
    function getInfo() { //create function called getInfo
        let username = document.getElementById("username").value //Create variable from the value within the given HTML element
        let password = document.getElementById("password").value //Create variable from the value within the given HTML element
        
        for(i = 0; i < objUsers.length; i++) //Create a for loop, that runs through the objects
            if(username == objUsers[i].username && password == objUsers[i].password) { //First it checks if the variable "username" corresponds to what is in one of the objects, if it finds that it is, it checks for password next.
                location=("index.html"); //If the above function finds a succesful match within one of the objects, it redirects you to index.html
            }
    }