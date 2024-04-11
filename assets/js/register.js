function validateForm() {
    var email = document.forms["RegisterForm"]["email"].value;
    var password = document.forms["RegisterForm"]["password"].value;

    if (email == "" || password == "") {
        alert("Email e senha são necessários.");
        return false;
    }

    if (!email.includes(".com")) {
        alert("Email inválido.");
        return false;
    }

    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    window.location.href = "../html/profile.html";
    return false;
}
