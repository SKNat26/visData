let current = 0;

// image
let image = document.querySelector("#picture img");

//personal info
let name = document.getElementById("name");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let country = document.getElementById("country");
// login info
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");

//buttons
let previousButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

function previous(event) {  
    event.preventDefault(); 

    if(current == 0) {
        current = 14;
    }
    else {
        current--;
    }

    let user = users.results[current];

    image.src = user.picture.large;

    name.innerHTML = "Name: " + user.name.first + " " + user.name.last;
    gender.innerHTML = "Gender: " + user.gender;
    age.innerHTML = "Age: " + user.dob.age;
    country.innerHTML = "Country: " + user.location.country;

    email.innerHTML = "Email: " + user.email;
    username.innerHTML = "Username: " + user.login.username;
    password.innerHTML = "Password: " + user.login.password;
}

function next(event) {
    event.preventDefault();

    if(current == 14) {
        current = 0;
    }
    else {
        current++;
    }

    let user = users.results[current];

    image.src = user.picture.large;

    name.innerHTML = "Name: " + user.name.first + " " + user.name.last;
    gender.innerHTML = "Gender: " + user.gender;
    age.innerHTML = "Age: " + user.dob.age;
    country.innerHTML = "Country: " + user.location.country;

    email.innerHTML = "Email: " + user.email;
    username.innerHTML = "Username: " + user.login.username;
    password.innerHTML = "Password: " + user.login.password;
}

previousButton.onclick = previous;
nextButton.onclick = next;


    