import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const BooksUsers = () => {
  const [data,setData]=useState([])
  const {idusers}=useParams()
  const navigate=useNavigate()
const addtoList=(idbooks)=>{
 let  id=+idbooks
 console.log({books_idbooks:idbooks,users_idusers:id})
  axios.post(`http://127.0.0.1:8080/relation`,{books_idbooks:idbooks,users_idusers:id})
  .then((res)=>{
  navigate(`/books/mylist/${idusers}`)})
  .catch((err)=>console.log(err))}

  useEffect(()=>{axios.get(`http://127.0.0.1:8080/books`).then((res)=>{setData(res.data)}).catch((err)=>console.log(err))},[])
const MyBook=()=>{
  navigate(`/books/mylist/${idusers}`)
}
  return (
    <div>
      <button type="button" 
    onClick={()=>{MyBook()}}
    className="btn btn-danger">My List book</button>
      <div className="row row-cols-1 row-cols-md-4 g-4 d-flex ">
      {
        
data.map((book)=>{ 
   return (
  

  <div className="col">
 
<div className="card"></div>
  <div  key={book.idbooks } className="card-group">
  <div className="card ">
    <img src={book.image} className="card-img-top figure-img img-fluid rounded " />
    <div className="card-body">
      <h5 className="card-title">{book.title}</h5>
      <h5 className="card-title">{book.author}</h5>
      <p className="card-text">{book.votes}</p>
      <Link to ={`/books/update/${book.idbooks}`}><MdOutlineUpdate size={50} /></Link>
      <Link to ={`/books/delete/${book.idbooks}`}><MdDelete size={50} /></Link>
      <Link to ={`/books/details/${book.idbooks}`} ><CgDetailsMore  size={50}/></Link>
      <button type="button" 
    onClick={()=>{addtoList(book.idbooks)}}
    className="btn btn-primary">Add to list</button>
    </div>
  </div>
  </div>
  </div>
      )})
   }
      </div> 
    </div>
  )
}

export default BooksUsers
