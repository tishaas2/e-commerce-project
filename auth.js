// ==========================
// ShopEase Authentication
// ==========================

// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find(user => user.email === email);

        if (userExists) {
            alert("User already exists!");
            return;
        }

        const newUser = {
            name,
            email,
            password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    });

}


// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(user =>
            user.email === email &&
            user.password === password
        );

        if (validUser) {

            localStorage.setItem("loggedInUser", JSON.stringify(validUser));

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("Invalid Email or Password");

        }

    });

}


// LOGOUT FUNCTION

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}


// CHECK LOGIN

const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (currentUser) {

    console.log("Welcome " + currentUser.name);

}
