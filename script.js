// If the user is already logged in the then the user will
// automatically diverted to the shopping portal

if (localStorage.getItem("currentUser") === null) {
    // Event listner for the login button there is no data in local storage
    // this button will divert the user to signup only
    // this implement the first time use functionality
    let loginButton = document.querySelector("#login-button");
    loginButton.style.cursor = "pointer";
    loginButton.addEventListener("click", () => {
      if (localStorage.length != 0) {
        location.href = "./login.html";
      } else {
        location.href = "./signup.html";
      }
    });
  
    // Same for the nav bar login button
    let navLogin = document.querySelector("#login > a");
    if (localStorage.length != 0) {
      navLogin.setAttribute("href", "./login.html");
    } else {
      navLogin.setAttribute("href", "./signup.html");
    }
  
    // Event listener for signup button
    let signupButton = document.querySelector("#signup-button");
    signupButton.style.cursor = "pointer";
    signupButton.addEventListener("click", () => {
      location.href = "./signup.html";
    });
  } else {
    location.href = "./shop.html";
  }