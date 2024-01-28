function contactUs() {
    mainData.innerHTML = `     <div class="contact">
    <div class="container">
        <div class="row g-2">
        <div class="col-md-6">
        <input id="nameInput" onkeyup="inputValid()" type="text" class="form-control" placeholder="Enter Your Name">
        <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
            Special characters and numbers not allowed
        </div>
        </div>
            <div class="col-md-6">
                <input id="emailInput" type="email" onkeyup="inputValid()" class="form-control" placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger  my-2 w-100 d-none">
                    Email not valid *exemple@yyy.zzz
                  </div>
            </div>
            <div class="col-md-6">
                <input id='phoneInput' type="text"  onkeyup="inputValid()" class="form-control" placeholder="Enter Your phone">
                <div id='phoneAlert' class="alert alert-danger  my-2 w-100 d-none" role="alert">
                    Enter valid Phone Number
                  </div>
            </div>
            <div class="col-md-6">
                <input id='ageInput' type="number"  onkeyup="inputValid()" class="form-control" placeholder="Enter Your Age">
                <div id='ageAlert' class="alert alert-danger  my-2 w-100 d-none" role="alert">
                    Enter valid age
                  </div>
            </div>
            <div class="col-md-6">
                <input id='passwordInput' type="password"  onkeyup="inputValid()" class="form-control" placeholder="Enter Your password">
                <div id='passwordAlert' class="alert alert-danger my-2 w-100 d-none" role="alert">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                  </div>
            </div>
            <div class="col-md-6">
                <input id='repasswordInput' type="password"  onkeyup="inputValid()" class="form-control" placeholder="Enter Your re-password">
                <div id='repasswordAlert' class="alert alert-danger my-2 w-100 d-none" role="alert">
                    Enter valid repassword
                  </div>
            </div>
            <a href="#" class="btn btn-primary " id='button1' onclick='but1()'>submit</a>
        </div>
    </div>
 </div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputVal = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputVal = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputVal = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputVal = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputVal = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputVal = true
    })
}
let nameInputVal = false;
let emailInputVal = false;
let phoneInputVal = false;
let ageInputVal = false;
let passwordInputVal = false;
let repasswordInputVal = false;




function inputValid() {
    if (nameInputVal) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")
        }
    }
    if (emailInputVal) {
        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")
        }
    }

    if (phoneInputVal) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
        }
    }

    if (ageInputVal) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")
        }
    }

    if (passwordInputVal) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
        }
    }
    if (repasswordInputVal) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
        }
    }


}

function nameValidation() {
    return (/^[a-z]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9])$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}
let button1 = document.getElementById('button1')

function but1(){
    if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() &&repasswordValidation()) {
        alert('Success ✅');
    } else {
        alert('Invalid data ❌')
    
    }
}