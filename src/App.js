import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import { AuthScreen } from "./Screens/AuthScreen/AuthScreen";
import { Dashboard } from "./Screens/Dashboard/Dashboard";
import { EditorScreen } from "./Screens/Editor/EditorScreen";
import { ErrorScreen } from "./Screens/ErrorScreen/ErrorScreen";
import {MainScreen} from "./Screens/MainScreen/MainScreen";
import { authState } from "./State/AuthState";

function App() {
  const auth = useRecoilValue(authState);
  
  
  useEffect(() => {
   
      auth.checkAuthenticated(
        (response) => {
          console.log("loggedIn");
          auth.setAuthenticated(true);
        },
        (error) => {
          console.log("not logged in");
          auth.setAuthenticated(false);
        }
      );
   
    
    
  }, []);

  auth.setAuthenticated(false);
  //console.log(auth);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<ErrorScreen/>}></Route>
          <Route path="/" element={<MainScreen/>}></Route>
          {/* AUTH_SCREEN */}
          <Route
            exact
            path="/auth/*"
            element={<AuthScreen auth={auth} />}
          ></Route>
          {/* DASHBORAD_SCREEN */}

          <Route
            exact
            path="/dashboard/*"
            element={
              <RequireAuth auth={auth}>
                <Dashboard />
              </RequireAuth>
            }
           
          />
          {/* EDITOR_SCREEN */}
          <Route
            exact
            path="/editor"
            element={
              <RequireAuth auth={auth}>
                <EditorScreen />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function RequireAuth({ auth , children }) {  //on development mode
  const location = useLocation();
  // return auth.checkLogin() === true 
  return true? (
    children
  ) : (
    <Navigate to="/auth" replace state={{ path: location.pathname }} />
  );
}
