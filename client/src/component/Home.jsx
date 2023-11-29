import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
const Home = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [book,setBook]=useState('')
  const[fbook,setFbook]=useState([])
  const [display,setDisplay]=useState(false)

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/books')
      .then((response) => { setData(response.data) })
      .catch((err) => { setError(true) })
  }, [])
 const findBook=(book)=>{
  var arr=[...data];
 var arr1=arr.filter((ele)=>{return ele.title===book})
  setFbook(arr1)
  setDisplay(true )
  
 }
  return (
    <div> 
    {  display? <div className="row row-cols-1 row-cols-md-4 g-4 d-flex ">{
    fbook.map((book)=>{return(
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
          <Link to ={`/books/details/${book.idbooks}`}><CgDetailsMore  size={50}/></Link>
        </div>
      </div>
      </div>
      </div>)})}
      </div>:
      <div>
    <h1 className=" text-center">Book Library</h1>
    <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Search"
    onChange={(e)=>{setBook(e.target.value)}}
    style={ {fontSize: '2rem'}}  />
    <button type="button" 
    onClick={()=>{findBook(book)}}
    className="btn btn-danger">Search</button>
</div>
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
        </div>
      </div>
      </div>
      </div>
          )})
        }
        </div>
         </div>
}
</div>
     
    
  );
}

export default Home
