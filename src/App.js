import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import PhotoSearch from './Pages/PhotoSearch';
import Topbar from './components/Topbar';
import SearchContextProvider from './context/SearchContext';
import DetailedPicture from './Pages/DetailedPicture';

function App() {
  return (
    <BrowserRouter>
    <SearchContextProvider>
    <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search/:searchQuery' element={<PhotoSearch/>} />
        <Route path='/photos/:imageName' element={<DetailedPicture/>}/>
      </Routes>
      </SearchContextProvider>
    </BrowserRouter>
  );
}

export default App;
