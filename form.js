let signupbtn = document.getElementById("signup-page");
let loginpage = document.getElementById('login');
let signuppage = document.getElementById('signup');
let loginbtn = document.getElementById('login-page');
let pwShowHide = document.querySelectorAll(".showHidePw");
let pswdfields = document.querySelectorAll(".inputpassword");
let signup_errorsection = document.getElementById('sign-up-errorsection');
let login_errorsection = document.getElementById('login-errorsection');
let line = document.querySelectorAll('.ll');

//...............................eye hide and show section...........................................................

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", (event)=>{
            let pwField = event.target.parentElement.querySelector(".inputpassword");
            let icon = event.target.parentElement.querySelector(".showHidePw")
                      if(pwField.type ==="password"){
                    pwField.type = "text";

                        icon.classList.replace("uil-eye-slash", 'uil-eye');   
                    
                }else{
                    pwField.type = "password";

                        icon.classList.replace("uil-eye", "uil-eye-slash");
                }
            
        });
    });

//....................................... code to appear signup and login form...................................................
    signupbtn.addEventListener("click", ()=>{
        loginpage.style.display='none';
        signuppage.style.display='block';
    });
    loginbtn.addEventListener("click", ()=>{
        loginpage.style.display='block';
        signuppage.style.display='none';
    });

//....................................code to appear the show and hide images....................................

    pswdfields.forEach(pswd =>{
      pswd.addEventListener('keydown', (event)=>{
       let icon = event.target.parentElement.querySelector(".showHidePw");
       icon.style.display='initial';
   
      });
    });


//................................. sending sign up page to the server...............
document.getElementById('sign-btn').addEventListener('click',(e)=>{
    let email = document.getElementById('userid').value;
    let writers_name = document.getElementById('email').value;
    let password= document.getElementById('signup-password').value;
    let confirm_password = document.getElementById('Confirm-password').value;
    if (!email || !writers_name || !password || !confirm_password ) {
        signup_errorsection.textContent="please fill in all the fields";
    }else{
        e.preventDefault();
        function isValidpswd1(password) {
             const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
             return pattern.test(password);
         }
        if (password!==confirm_password) {
                     signup_errorsection.textContent = "password and confirm password must be the same";
                     document.getElementById('Confirm-password').style.color='red';
                     document.getElementById('con-pass').style.border='solid 1px red';
                     document.getElementById('con-pass').style.opacity='1.0';
            }else if(!isValidpswd1(password)){
                     signup_errorsection.textContent = "password must contain 8 characters atleast one uppercase and lowercase.";
                     document.getElementById('signup-password').style.color='red';
                     document.getElementById('sgn-pass').style.border='solid 1px red';
                     document.getElementById('sgn-pass').style.opacity='1.0';
        } else {
            signup_errorsection.textContent = "";
                     document.getElementById('signup-password').style.color='black';
                     document.getElementById('sgn-pass').style.border='none';
                     document.getElementById('sgn-pass').style.opacity='0.4';
                     document.getElementById('Confirm-password').style.color='black';
                     document.getElementById('con-pass').style.border='none';
                     document.getElementById('con-pass').style.opacity='0.4';

        fetch('/registration',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password:password,
            email:email,
            userid:writers_name
        })
        })
        .then(response => response.json())
        .then(data => {
             if(data.email){
                console.log(data);
                alert(`hey '${data.name}' registration was a success please login to continue`);
                loginpage.style.display='block';
                signuppage.style.display='none';
               }else{
                signup_errorsection.textContent=''
                signup_errorsection.textContent = 'email or username already exists';
               }
        
        })
        .catch(error => {
             console.error(error);
             alert('An error occurred during registration please try agian later');
        });

        }
           }
});

//................................. sending login page to the server...............

document.getElementById('log-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    let login_password = document.getElementById('login-password').value;
    let login_email = document.getElementById('userid1').value;
    if (!login_password || !login_email) {
        login_errorsection.textContent = "please fill in all the fields";
        line.forEach((border) => {
            border.style.opacity='1.0';
            border.style.border='solid 1px red';
        });
    } else {
        login_errorsection.textContent = "";
        fetch('login',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password:login_password,
            email:login_email
        })
        })
        .then(response => response.json())
        .then(data => {
    
            if (data.error){
                console.log(data.error);
                if (data.error=='Invalid password') {
                login_errorsection.textContent = 'incorrect password please click forgot password';
                }else{
                    login_errorsection.textContent = 'email entered is not registered please go to signup page first or use a registered email';
                    }
                }else{
                 document.cookie = `token=${data.token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
                  let cookie = document.cookie;
                alert(`login successful welcome let's start`);
                let tokenCookie = cookie.split('; ').find(cookie => cookie.startsWith('token='));
                if (tokenCookie) {
                location ='/';
                }
                    }
        
        })
        .catch(error => {
            console.error('Error:', error)
            login_errorsection.textContent = 'failed to login please refresh and try agian'
        });
    }

})