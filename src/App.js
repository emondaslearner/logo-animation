import logo from './logo.svg';
import './App.css';
import './components/css/style.css'
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="main">
        <Header/>
        <Content/>
    </div>
  );
}

export default App;
