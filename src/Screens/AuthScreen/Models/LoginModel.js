function LoginModel() {
    let email;
    let password;
    let isLoggedIn = false;

    this.login = (_email , _password) => {
        email = _email;
        _password = _password;
    }

    this.isLoggedIn = ()=> {

    }
}