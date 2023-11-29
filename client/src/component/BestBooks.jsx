import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const BestBooks = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/books')
            .then((response) => {
                return response.data.sort((a, b) => b.votes - a.votes)
            }).then((data) => {
                setData([data[0], data[1], data[2]])
            })
            .catch((err) => { setError(true) })
    }, [])
    console.log(data, "test")

    return (
        <div>
            <h1  className=" justify-content-md-center row row-cols-1 row-cols-md-5 g-4  mt-5 mr-50 ml-50"> Our best books </h1>
<div className=" justify-content-md-center row row-cols-1 row-cols-md-5 g-4  mt-5 mr-50 ml-50  ">{
    data.map((book)=>{return(
    <div className="col">
     <div className="card"></div>
      <div  key={book.idbooks } className="card-group">
      <div className="card ">
        <img src={book.image} className="card-img-top figure-img img-fluid rounded " />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h5 className="card-title">{book.author}</h5>
          <p className="card-text">{book.votes}</p>
          <Link to ={`/books/details/${book.idbooks}`}><CgDetailsMore  size={50}/></Link>
        </div>
      </div>
      </div>
      </div>)})}
        </div></div>
    )
}

export default BestBooks
