const express = require("express");
const { getAllBooks, addBooks, deleteBooks, deleteRelation,updateBooks ,getBookById,getAlluser,addUser,bookUser,addBookUser} = require("./database/mysql/index.js")

const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/books", async (req, res) => {
  getAllBooks().then((result) => {
    res.json(result[0])})
    .catch((err) => (res.send(err)))
  });
app.get('/books/:id',async(req,res) =>{
 getBookById(req.params.id).then((result) => { res.json(result[0][0]) })
 .catch((err) => (res.send(err)))
})
app.post("/books", async (req, res) => {
  addBooks(req.body).then((result) => { res.json("done") })
    .catch((err) => (res.send(err)))
});
app.delete("/books/:id", async (req, res) => {
  deleteBooks(req.params.id)
    .then(() => { return getAllBooks() })
    .then((result) => { res.json(result[0]) })
    .catch((err) => (res.send(err)))
});
app.put('/books/:id', async (req, res) => {
  updateBooks(req.params.id)
    .then(() => { return getAllBooks() })
    .then((result) => { console.log(result); res.json(result[0]) })
    .catch((err) => (res.send(err)))
})

app.get('/users',async(req,res)=>{
  getAlluser().then((result) => {
    res.json(result[0])})
    .catch((err) => (res.send(err)))
})

app.post('/users',async (req,res)=>{
 
 addUser(req.body)
  .then((res)=>{res.send('done')})
  .catch((err)=>{res.send(err)})

})
app.get("/books/users/:userid",async(req,res)=>{
  bookUser(req.params.userid).then(result=>res.send(result[0])).catch((err)=>{
  res.send(err)})})
  
  
  app.post("/relation",async(req,res)=>{
    addBookUser(req.body)
    .then((result)=>{res.send('done')})
    .catch((err)=>{console.log(err)})
  })
app.delete("/relation/:idbooks",async(req,res)=>{
  deleteRelation(req.params.idbooks).then(result=>res.send('done')).catch((err)=>{
    res.send(err)})
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
