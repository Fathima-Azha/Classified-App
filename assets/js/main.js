function showLogInModal() {
    //alert('ok')

    const loginModal = document.getElementById('login-modal');
    const boostrapModal = new bootstrap.Modal(loginModal);
    boostrapModal.show();
}


function logIn() {
    //alert("ok");

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    // alert (email);
    // alert (password);

    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            const response = request.responseText;
            if (request === 'Success'){
            alert('Log In Success');
             } else {
                alert(response)
             }
        }
    };
    request.open("post", "logInProcess.php", true);
    request.send(form);
}