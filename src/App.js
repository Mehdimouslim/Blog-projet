// import './App.css';
// import './bootstrap.min.css';
// import Footer from './components/footer/Footer';
// import Header from './components/header/header';
// import Home from './components/home';
// import Login from './components/Login/Login'
// import Register from './components/Login/Register'
// import {  Routes, Route, Outlet } from 'react-router-dom';
// function App() {
//   return (
    
    
 
   
//      <div className="App"> 
//     <Routes>
//     <Header/>
//       <Route path='/'element={<Home/>} exact />
//       <Route path="/login" element={<Login/>}></Route>
//       <Route path="/Register" element={<Register/>} ></Route>
//     </Routes>
//     <Footer/>
//     </div>
    
//   );
// }
// export default App;




// import './bootstrap.min.css';
import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from "./components/Login/Login";
import Single from "./components/Single";
import About from "./components/about";
function App() {
  return (
   
    <div className="App" >
    
     <Routes>
     <Route path='/'element={<Home/>} exact/>
     <Route path='/Login'element={<Login/>} />
     <Route path='/Single/:id'element={<Single/>} />
     <Route path='/About'element={<About/>} />

     </Routes>
   
    </div>
   
  );
}

export default App;

