import Home from './componentes/container/Home'
import './style/styles.scss';
import Aboutme from './componentes/container/Aboutme';
import Education from './componentes/container/Education';
import Header from './componentes/pure/Header';
import Skill from './componentes/container/skill';
import Contact from './componentes/pure/form/Contact';
import Footer from './componentes/container/Footer';
//import Header from './componentes/container/Header.jsx'
function App(){
    return(
        <div className="App">
            <header className="App-header">
               {/* <Header></Header> */}
               <Header></Header>
            </header>
            <body className="body-app">
                <Home></Home>
                <Aboutme></Aboutme>
                <Education></Education>
                <Skill></Skill>
                <Contact></Contact>
                <Footer></Footer>
            </body>
        </div>
    );
}

export default App;