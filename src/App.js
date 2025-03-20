import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Index1y2 from "./pages/Index1y2";
import Index3y4 from "./pages/Index3y4";


function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/pregunta1">Pregunta 1 y 2 </Link> |
                <Link to="/pregunta2">Pregunta 3 y 4</Link>
            </nav>
            <Routes>
                <Route path="/pregunta1" element={<Index1y2/>}/>
                <Route path="/pregunta2" element={<Index3y4/>}/>
            </Routes>

        </div>
    );
}

export default App;
