//Get posts - Alle Posts
//Post posts - Neuen Post Erstellen (json Body in der Anfrage mit namen, author und content) + randome generierte ID & createdAT
//Get posts/id - Einen Post bekommen (id ist die post id)
//DELET posts/id - Einen Post löschen
const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require("crypto")

const app = express()
app.use(bodyParser.json())

const posts = []

function createPostID() {
    const id = randomBytes(8).toString("hex")
    if(post.some((post) => post.id === id)) return createPostID()
    return id
}
app.get("/posts", (req, res) => {
    res.json(posts)
})

app.post("./posts", (req, res) => {
    const body = req.body
    if(!body.name || !body.autor || !body.content) return res.sendStatus(400)

    const post = {
        id: createPostID(),
        createAt: new Date(),
        name: body.name,
        author: body.author,
        content: body.content
   }

   post.push(post)
   res.json(post)
})


app.get("/posts/:id", (req, res) => {
    const post = posts.find((post) => post.id == req.params.id)
    if(!post) return res.sendStatus(404)
})



app.listen(8080, () => {
    console.log("Webserver läuft auf http://localhost:8080")
}) 