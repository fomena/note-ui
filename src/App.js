
// import Register from './pages/register.js'
import NavBar from "./components/nav-bar.js";

import './App.css'
// import NoteRecord from './pages/note-record.js';

import Routing from "./navigation/routing.js";
function App() {
  return (
    <div className='app-main-container'>

      

      
        <Routing auth="true" />
      
    </div>
  );
}

export default App;
