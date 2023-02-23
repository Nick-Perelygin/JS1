const form = document.querySelector(".login-form")
const email = document.querySelector("[name='email']")
const password = document.querySelector("[name='password']")

form.addEventListener("submit", (event) =>{
  event.preventDefault();
    const {
        elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
      return alert("Bсі поля повинні бути заповнені");
    
  }
    const resaultObj = {}
    resaultObj.Email = `${ email.value }`;
    resaultObj.Password = `${ password.value }`
    console.log(resaultObj)
  event.currentTarget.reset();
})