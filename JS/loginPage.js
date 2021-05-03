var accountInfo = {
    account: 'camerashop2021',
    password: 'camera2021'
};

var accountTemp = [];

function definition() {
    let inputFocus = document.getElementsByClassName('inputStyle');
    for (let i = 0; i < inputFocus.length; i++) {
        inputFocus[i].addEventListener('focus', inputBaseLineFocus);
    }

    let inputBlur = document.getElementsByClassName('inputStyle');
    for (let i = 0; i < inputBlur.length; i++) {
        inputBlur[i].addEventListener('blur', inputBaseLineBlur);
    }

    let submitAC = document.querySelector('.submitBTN');
    submitAC.addEventListener('click', accountCheck);

    let signUpAC = document.querySelector('.signUpBTN');
    signUpAC.addEventListener('click', createAccount);

    let pageSwitch = document.getElementsByClassName("pageSwitch");
    for (let i = 0; i < pageSwitch.length; i++) {
        pageSwitch[i].addEventListener('click', pageStatusSwitch);
    }
}

function pageStatusSwitch() {
    let logInPage = document.querySelector(".logInPageContainer");
    let signUpPage = document.querySelector(".signUpPageContainer");
    if (logInPage.style.display == "block") {
        logInPage.style.display = "none";
        signUpPage.style.display = "block";
    }
    else {
        logInPage.style.display = "block";
        signUpPage.style.display = "none";
    }
}


function accountCheck() {
    let ac = document.querySelector('.account');
    let pw = document.querySelector('.password');
    let warn = document.querySelector('.warning');
    if(ac.value != accountInfo.account) {
        for (let i = 0; i < accountTemp.length; i++) {
            if (ac.value === accountTemp[i].account && pw.value === accountTemp[i].password) {
                window.location.href = "index.html";
            }
        }
    }
    else if (ac.value == accountInfo.account && pw.value == accountInfo.password) {
        window.location.href = "index.html";
    }
    ac.value = '';
    pw.value = '';
    warn.style.display = "block";
}

function initAccount() {
    accountTemp = JSON.parse(localStorage.getItem('createAc')) || [];
    console.log(accountTemp);
}

function createAccount() {
    let ac = document.querySelector('.signUpAccount');
    let pw = document.querySelector('.signUpPassword');
    if(ac.value == '' || pw.value == ''){
        alert("Please try again");
        return
    }
    newAccount =
    {
        account: ac.value,
        password: pw.value
    };
    accountTemp.push(newAccount);
    localStorage.setItem('createAc', JSON.stringify(accountTemp));
    window.location.href = "loginPage.html";
}

function inputBaseLineFocus(e) {
    e.target.style.borderBottom = '1px solid #f59f1e';
}

function inputBaseLineBlur(e) {
    e.target.style.borderBottom = '1px solid #000';   
}

initAccount();
definition();
pageStatusSwitch();