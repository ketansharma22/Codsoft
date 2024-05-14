import "./App.css";
import Header from "./components/Header";
import {HashLink as Link} from 'react-router-hash-link'
import Profile from "./components/Profile";
import Expertise from "./components/Expertise";
function App() {
  return (
  <div>
    <Header /> 
    <Profile/>
    <Expertise/>
  </div>)
}

export default App;
