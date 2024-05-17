import "./App.css";
import Header from "./components/Header";
import {HashLink as Link} from 'react-router-hash-link'
import Profile from "./components/Profile";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import UseCursor from "./components/UseCursor";
import Accomplishments from "./components/Accomplishments";
import Contactme from "./components/Contactme";
function App() {
  return (
  <div>
  <UseCursor/>
    <Header /> 
    <Profile/>
    <Expertise/>
    <Projects/>
    <Accomplishments/>
    <Contactme/>
  </div>)
}

export default App;
