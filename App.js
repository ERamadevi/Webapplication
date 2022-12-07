import React from 'react';
 import { HashRouter, Routes,Route,Link} from 'react-router-dom';
   
 import Home from './home';
  import Edit from './edit';
  import Myclass3 from './class3';
  

 const App = () => {
   return (
      
         <HashRouter>
           
            <ul className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            <div className="container-fluid">
         
             
            <li> <Link to="/Home" className='mylink'>home</Link> </li> 
            <li> <Link to="/Edit" className='mylink'>edit</Link> </li>
            <li> <Link to="/class" className='mylink'>class</Link> </li>
            
               </div>
            </ul>
            
         <Routes>
            <Route exact path="/home"  element={ <Home/> }/>
            <Route exact path="/edit"  element={ <Edit/> }/>
            <Route exact path="/class" element={ <Myclass3/> }/>
         
            
         </Routes>
         </HashRouter>
      
   )
 }


export default App;
