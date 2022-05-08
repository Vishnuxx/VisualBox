
export function Auth(sdk) {
  const auth = sdk.account;
  var isLoggedIn = false;

  this.checkLogin = () => isLoggedIn;

  this.checkAuthenticated = (onAuthenticated, onFailure) => {
    try {
      const promise = auth.get();
      promise.then(
        function (response) {
          isLoggedIn = true;
          onAuthenticated(response);
        },
        function (error) {
          isLoggedIn = false;
          onFailure(error);
        }
      );
    }catch(e) {
      onFailure(e)
    }
    
  };

  this.signup = (username, email, password, onSuccess, onFailure) => {
    auth.create("unique()", email, password, username).then(
      (response) => {
        onSuccess(response);
      },
      (error) => {
        onFailure(error);
      }
    );
  };

  this.login = (email, password, onSuccess, onFailure) => {
    auth.createSession(email, password).then(
      function (response) {
        onSuccess(response);
        isLoggedIn = true;
        localStorage.setItem("auth_state", true);
      },
      function (error) {
        isLoggedIn = false;
        onFailure(error);
        localStorage.setItem("auth_state", false);
      }
    );
  };

  this.setAuthenticated = (val) => {
    this.authenticated = val;
    localStorage.setItem("auth_state", val);
    isLoggedIn = val;
  };

  this.logout = (onSuccess , onFailure) => {
    auth.deleteSession("current").then(
      function (response) {
        isLoggedIn = false;
        localStorage.setItem("auth_state" , false);
        onSuccess(response);
      },
      function (error) {
        onFailure(error);
      }
    );
  };
}
