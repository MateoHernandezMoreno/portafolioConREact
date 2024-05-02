import Home from './componentes/container/Home'
import './style/styles.scss';
import Aboutme from './componentes/container/Aboutme'
import Education from './componentes/container/Education';
import Header from './componentes/pure/Header';
import Skill from './componentes/container/skill';
import Contact from './componentes/pure/form/Contact';
import Footer from './componentes/container/Footer';
import useFloatingButton from './componentes/hooks/Floatbuttom';
// import Butonfloat from './componentes/container/Butonfloat';
//import Header from './componentes/container/Header.jsx'
function App(){
    const showButton = useFloatingButton(200); // Cambia 200 a la posición deseada

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
                {/* <Butonfloat></Butonfloat> */}
                <Footer></Footer>
                {showButton && 
                <button style={{position: 'fixed', bottom: '20px', right: '20px', background: 'transparent', border: 'none' }}>
                    <div className="footer-iconTop">
                        <a href="#home">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                style={{ fill: "#ededed" }}
                            >
                              <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z" />
                            </svg>
                        </a>
                    </div>
                </button>}
            </body>
        </div>
    );
}

export default App;