import './App.css';
import SearchBar from './components/SearchBar';
import ProjectHeader from './components/ProjectHeader';


function App() {
  return (
    <div className="App">
      <ProjectHeader />
      <form>
        <SearchBar />
      </form>
      
    </div>
  );
}

export default App;
