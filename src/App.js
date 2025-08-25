import { BrowserRouter as Router ,Routes, Route ,Link} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App(){
    return(
        <FeedbackProvider>
        <Router>
        <Header/>
        <div className="container">
        <Routes>
        <Route exact path="/" element={<>
        <FeedbackForm  />
        <FeedbackStates />
        <FeedbackList  />
        </>}
        />
        <Route path="/about" element={<About/>} />
        </Routes>
        <AboutIconLink />
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App;