
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Role from './components/Role'
import Teenager from './components/Teenager'
import Pregnant from './components/Pregnant'
import Child from './components/Child'
import Home from './components/Home'
import FeedBack from './components/FeedBack'
import Book from './components/Book'
import CancelBook from './components/CancelBook'
import AdminLogin from './components/AdminLogin'
import AdminHome from './components/AdminHome'
import AdminFeedback from './components/AdminFeedback'
import ViewBook from './components/ViewBook'
import EducationalVideo from './components/EducationalVideo'
import NutritionVideos from './components/NutritionVideos'

function App() {
  

  return (
    <>
    <BrowserRouter>
   <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/role' element={<Role/>}/>
    <Route path='/teenager' element={<Teenager/>}/>
    <Route path='/pregnant' element={<Pregnant/>}/>
    <Route path='/child' element={<Child/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/feedback' element={<FeedBack/>}/>
    <Route path='/book' element={<Book/>}/>
    <Route path='/cancel' element={<CancelBook/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>
    <Route path='/adminhome' element={<AdminHome/>}/>
    <Route path='/adminfeedback' element={<AdminFeedback/>}/>
    <Route path='/viewbook' element={<ViewBook/>}/>
    <Route path='/educationalvideo' element={<EducationalVideo/>}/>
    <Route path='/nutritionvideo' element={<NutritionVideos/>}/>
    


  
   </Routes>
   </BrowserRouter>
      
    </>
  )
}

export default App
