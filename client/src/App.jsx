import "./App.css";
import {Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Nave from "./component/nav";
import Signup from "./component/Signup";
import AddBooks from "./component/AddBooks"
import DeleteBooks from "./component/DeleteBooks"
import UpdateBooks from "./component/UpdateBooks"
import Details from "./component/details.jsx";
import Signin from "./component/Signin.jsx";
import BooksUsers from "./component/BooksUsers.jsx"
import Mylist from "./component/Mylist.jsx";
import DeleteMylist from "./component/DeleteMylist.jsx";
import BestBooks from "./component/BestBooks.jsx";

function App() {
  return <>
  <Nave/>
  <Routes>
    <Route path='/' element  = {<BestBooks/>} />
    <Route path='/books' element  = {<Home/>} />
    <Route path='/signup' element  = {<Signup/>} />
    <Route path='/signin' element  = {<Signin/>} />
    <Route path='/books/update/:id' element  = {<UpdateBooks/>} />
    <Route path='/books/delete/:id' element  = {<DeleteBooks/>} />
    <Route path='/books/add/' element  = {<AddBooks/>} />
    <Route path='/books/details/:id' element  = {<Details/>} />
    <Route path='/books/users/:idusers' element  = {<BooksUsers/>} />
    <Route path='/books/mylist/:id' element  = {<Mylist/>} />
    <Route path='/books/relation/:id' element  = {<DeleteMylist/>} />

  </Routes>
  </>;
}

export default App;
