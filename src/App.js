import './App.css';
import SearchBar from './components/SearchBar';
import ProjectHeader from './components/ProjectHeader';
import Results from './components/Results';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <ProjectHeader /> 
        <div className="speech-bubble" >
          <p className="inital-text">Hover over the icon below me to search for recruiters!</p>
        </div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/results" component={Results}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () =>(
  <div>
    <SearchBar />
  </div>
)
export default App;
