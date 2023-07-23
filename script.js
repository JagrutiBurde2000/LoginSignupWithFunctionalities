
//forms
const loginForm=document.getElementById("loginForm")
const signupForm=document.getElementById("signupForm")


//login form
const loginName=document.getElementById("name")
const loginEmail=document.getElementById("email")
const loginPassword=document.getElementById("password")

//buttons in login form
const loginButton=document.getElementById("loginbutton")
const signupButton=document.getElementById("signupbtn")

//buttons in signup form
const signup=document.getElementById("SignUp")
const goToLogin=document.getElementById("return")

//signup form
const signupName=document.getElementById("username")
const signupEmail=document.getElementById("signupEmail")
const signupPassword=document.getElementById("signupPassword")
const confirmPassword=document.getElementById("confirmPassword")


//display userData
const userData=document.getElementById("userData")
const loggedUsername=document.getElementById("loggedInUsername")
const loggedEmail=document.getElementById("loggedInEmail")
const logout=document.getElementById("logout")
//Storing data in object

var storeData={
    name:"",
    email:"",
    password:""
};

//error
const error=document.getElementById("info")

signupButton.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
    confirmPassword.value = "";
  
  });
  
signup.addEventListener("click",()=>{
var name=signupName.value;
var email=signupEmail.value;
var password=signupPassword.value;
var cPassword=confirmPassword.value;


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


if(name && email && password && cPassword){
    var allData=JSON.parse(localStorage.getItem(email));
    if(allData){
    //    error.textContent="account already registered";
       alert("Account already registered.");
       signupEmail.value="";
      
    }else{
        if(password===cPassword){
            if (!isValidEmail(email)) {
                alert("Invalid email format. Please enter a valid email address.");
                lo
              }else{
                localStorage.setItem(email, JSON.stringify({name,email, password}))
                alert("account created SuccessFully")
                loginForm.style.display="block";
                signupForm.style.display="none";
                
                signupName.value = "";
                signupEmail.value = "";
                signupPassword.value = "";
                confirmPassword.value = "";
              }
        }else{
            alert("password do not match, please re-enter")
        }
    }
}else{
    alert("please fill all the fields")
}
})

goToLogin.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    loginName.value = "";
    loginEmail.value = "";
    loginPassword.value = "";
  });
  

  loginButton.addEventListener("click", ()=>{
var name=loginName.value;
var email=loginEmail.value;
var password=loginPassword.value;

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

if(name && email && password){
    if(!isValidEmail(email)){
        alert("Invalid email format. Please enter a valid email address.");
        loginEmail.value = "";
    }else{
        var storedData=JSON.parse(localStorage.getItem(email))
        if(storedData && storedData.password===password){
            displayUserData(storedData.name, email)
        }else if(!storedData ){
            alert("Invalid username or password")
             loginName.value = "";
    loginEmail.value = "";
    loginPassword.value = "";
        }
        
    }
   
}

else{
    alert("Please fill all the required fields.");
}
  })

  function displayUserData(name, email) {
    storeData.name = name;
    storeData.email = email;
  
    loggedUsername.innerHTML = "Logged in as: " + name;
    loggedEmail.innerHTML = "Email: " + email;
  
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    userData.style.display = "block";
  }

logout.addEventListener("click", () => {
    userData.style.display = "none";
    loginForm.style.display = "block";
  
    loginName.value = "";
    loginEmail.value = "";
    loginPassword.value = "";
  });
  
 