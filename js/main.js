// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let Error = document.getElementById('textChange');
let Ast1 = document.getElementById('ast1');
let Ast2 =  document.getElementById('ast2');
let Ast3 =  document.getElementById('ast3');
let Ast4 =  document.getElementById('ast4');
let Ast5 =  document.getElementById('ast5');
let Name
let Pass
let SecondPass
let User2 = loadUsers();
let Users = [];


// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

// Gets the info and updates it then passes it on to another function
function signUpHandler() {
  Name = document.getElementById('Namez').value;
  Pass = document.getElementById('Password').value;
  SecondPass = document.getElementById('confirmPassword').value;
  
  AddUser(Name, Pass, SecondPass);
};

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);


function signInHandler() {
  console.log('Sign In Btn Clicked');
  Name = document.getElementById('SignUser').value;
  Pass = document.getElementById('SignPassword').value;

  SignIn(Name, Pass);
};


//  We Observe The Function as it tends to it's younglings
//  Takes the user info and forces it into an enclosed space(object) then passes it on to the array if the passwords match
function AddUser(Name, Pass, confirmPass) {
  
  let User = {Name: Name, Password: Pass};
  
  if (Pass === confirmPass) {
    Users.push(User);
    saveUsers()
    SignIn(Name, Pass, SecondPass); 
  
  } else {
    Error.innerHTML = `Passwords Don't Match`;
    Ast1.innerHTML = '';
    Ast2.innerHTML = '*';
    Ast3.innerHTML = '*';
    Ast4.innerHTML = '';
    Ast5.innerHTML = '*';
    console.log("Pasword Check failed");
  };

  console.log("Swag money");
}

function CheckUser() {

};


// Checks if the information given matches any accounts which are in the array
function SignIn(name, pass) {
  console.log('User sign in started')
  for (let i = 0; i < Users.length; i++) {
    if (name === Users[i].Name && pass === Users[i].Password) {
      Ast1.innerHTML = '';
      Ast2.innerHTML = '';
      Ast3.innerHTML = '';
      Ast4.innerHTML = '';
      Ast5.innerHTML = '';
      Error.innerHTML = '';
      return alert('Sign In Successful');
    } else {
      Error.innerHTML = 'User Not Found. Please Create One';
      console.log('User sign in Failed')
    };
  };

};


function saveUsers() {
  localStorage.setItem("Users", JSON.stringify(Users));
};

function loadUsers() {
  let UserStr = localStorage.getItem('Users');
  return JSON.parse(UserStr) ?? [];
};

//////// Yo no entiendo \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\