import './App.css';
import Router from './components/Router';
import { AuthProvider } from './context/AuthContext';
// import Home from './components/Home';


function App() {
  return (
    <AuthProvider>
      <div className="App" >
        <Router/>
      </div>
    </AuthProvider>
  );
}

export default App;
