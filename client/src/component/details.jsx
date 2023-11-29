import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Details = () => {
  const {id}=useParams()
  const [book,setBook]=useState({})
  console.log(book)
  useEffect(()=>{
  axios.get(`http://127.0.0.1:8080/books/${id}`).then(result=>setBook(result.data))
  .catch((err)=>{console.log(err)})
  },[])
  return (
    <div className="center row row-cols-1 row-cols-md-5 g-4  mt-5 mr-50 ">
      <div className=" mx-auto col ">
     
     <div className="card"></div>
       <div  key={book.idbooks } className="card-group">
       <div className="card ">
         <img src={book.image} className="card-img-top figure-img img-fluid rounded "
          />
         <div className="card-body">
           <h3 className="card-title">Title:{book.title}</h3>
           <h3 className="card-title">Author:{book.author}</h3>
           <h3 className="card-text">Nb of votes:{book.votes}</h3>
           <h3 className="card-text"> Description:{book.description}</h3>
           <h3 className="card-text">Published at:{book.publication_date}</h3>
           <Link to ={`/books/update/${book.idbooks}`}><MdOutlineUpdate size={50} /></Link>
           <Link to ={`/books/delete/${book.idbooks}`}><MdDelete size={50} /></Link>
         </div>
       </div>
       </div>
       </div>
    
    </div>
  )
}

export default Details
