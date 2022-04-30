
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthScreen } from './Screens/AuthScreen/AuthScreen';
import { Dashboard } from './Screens/Dashboard/Dashboard';
import { EditorScreen } from './Screens/Editor/EditorScreen';



function App() {
  console.log('app')
  return (
    <Router>
      <div className="App">
        {/* <Dashboard></Dashboard> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/auth" element={<AuthScreen />}></Route>
          <Route exact path="/editor" element={<EditorScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
