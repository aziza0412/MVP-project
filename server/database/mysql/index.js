const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'booksstore'
}).promise();

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

const getAllBooks=async () => {
 const sql='select * from books'
   return connection.query(sql)
}
const addBooks=async({author,publication_date,title,image,description,votes})=>{
  
 const sql=`INSERT INTO books (author,publication_date,title,image,description,votes)
 VALUES (?,?,?,?,?,?)`
 return connection.query(sql,[author,publication_date,title,image,description,votes])
}
const deleteBooks= async(id)=>{
  const sql=`DELETE FROM books WHERE idbooks=${id};`
  return connection.query(sql)

}
const updateBooks=async (id,votes)=>{
  sql=`UPDATE books SET votes =votes +1  WHERE idbooks=${id};`;
return connection.query(sql)
}
const getBookById=async (id)=>{
  const sql= `select * from books where idbooks=${id}`
  return connection.query(sql)
}
const getAlluser=()=>{
  const sql='select * from users'
  return connection.query(sql)
}
const addUser=async ({name,password,email})=>{
  const sql=`INSERT INTO users (name,password,email)
  VALUES (?,?,?)`
  connection.query(sql,[name,password,email])
}
const bookUser=async(id)=>{
  sql=` select author,publication_date,title,image,description,votes,idbooks
FROM books 
INNER JOIN relation 
  on books.idbooks =relation.idrelation
INNER JOIN users 
  on relation.users_idusers = users.idusers where users.idusers=${id}`
   return connection.query(sql)
}
const addBookUser=async ({books_idbooks,users_idusers})=>{
  sql=`insert into relation (books_idbooks,users_idusers) values(${books_idbooks},${users_idusers})`
 return  connection.query(sql)
}
const deleteRelation= async (id)=>{
  sql=`DELETE FROM relation WHERE books_idbooks=${id};`
}

// Don't forget to export your functions!
module.exports = {deleteRelation,getAllBooks,addBooks,deleteBooks,updateBooks,getBookById,getAlluser,addUser,bookUser,addBookUser

};
