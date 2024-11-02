
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BookPage from './pages/bookPage/BookPage';
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';
import BookDetailsPage from './pages/bookDetailesPage/BookDetailsPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import LoginPage from './pages/loginPage/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/books/*" element={<BookPage />}/>
        <Route path='/book/details/:id' element={<BookDetailsPage/>}/>
        <Route path='/about/*' element={<AboutPage/>}/>
        <Route path='/contact/*' element={<ContactPage/>}/>
        <Route path='/registration'  element={<RegistrationPage/>}/>
        <Route path='/login' element={  <LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
