// Creating const variables so the property cannot be reasigned 
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
// Adding an event and making two const variables for username and password
loginButton.addEventListener("click", (e) => {
// If the textbox is not clicked on then the user cannot input
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
// Setting the correct input needed for username and password
    if (username === "teacher" && password === "teachernpss") {
    // If the input is correct it will redirect the user to another page
        window.location.href = "C:/Users/Pratham/Documents/Announcement%20Page/teacher.html";
    } else {
    // If its incorrect then there were be message displayed
        loginErrorMsg.style.opacity = 1;
    }
})