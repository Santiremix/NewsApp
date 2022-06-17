import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import News from './components/News/News'
import ListNews from './components/ListNews/ListNews'
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/list' element={<ListNews/>}></Route>
          <Route path='/news' element={<News/>}></Route>
        </Routes>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
