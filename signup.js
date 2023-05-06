let form = document.querySelector(".form");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let confPass = document.querySelector("#conf-password");
let userArray = [];
let emailArray = [];

let navLogin = document.querySelector("#login > a");
if (localStorage.length != 0) {
  navLogin.setAttribute("href", "./login.html");
} else {
  navLogin.setAttribute("href", "./signup.html");
}

// Event listener for the form on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("sign-up button clicked");
  if (pass.value === confPass.value) {
    let user = {};
    user.firstName = firstName.value;
    user.lastName = lastName.value;
    user.email = email.value;
    user.pass = pass.value;
    console.log(user);
    if (localStorage.length == 0) {
      userArray.push(user);
      localStorage.setItem("usersData", JSON.stringify(userArray));

      emailArray.push(email.value);
      localStorage.setItem("userEmails", JSON.stringify(emailArray));

      alert("Your account has been created");
      location.href = "./login.html";
    } else {
      if (!userExists(email.value)) {
        let tempArr = JSON.parse(localStorage.getItem("usersData"));
        tempArr.push(user);
        localStorage.setItem("usersData", JSON.stringify(tempArr));

        let emArray = JSON.parse(localStorage.getItem("userEmails"));
        emArray.push(email.value);
        localStorage.setItem("userEmails", JSON.stringify(emArray));

        alert("Your account has been created");
        location.href = "./login.html";
      } else {
        alert(`User with Email-id : ${email.value} already exists!`);
        form.reset();
      }
    }
  } else {
    alert("Both the passwords doesnot match!!!");
    form.reset();
  }
});


// function to check if the email id enterd by the user already exists in the local storage
function userExists(email) {
  let tempEmail = JSON.parse(localStorage.getItem("userEmails"));

  for (let x of tempEmail) {
    if (x === email) {
      return true;
    }
  }

  return false;
}

// event listener to hide the navabar if the user click the form and navbar is opened
form.addEventListener("click", () => {
  if (window.innerWidth <= 1000 && links.classList.contains("responsive")) {
    links.className = "";
  }
});