const express = require("express")
const mysql = require("mysql")
const BodyParser = require("body-parser")

const app = express()

app.use(BodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.set("views", "views")

const db = mysql.createConnection({
    host  : "localhost",
    database : "node_db",
    user: "root",
    password: "",
})

db.connect((err) => {
    if (err) throw err
    console.log('database connected')

    // untuk get data
    app.get("/", (req, res) => {
        const sql = "SELECT * FROM siswa"
        db.query(sql, (err, result) => {
            const users = JSON.parse(JSON.stringify(result))
            res.render("index", {users: users, title: "DAFTAR MURID"})
        })
    })

    // untuk insert data
    app.post("/tambah", (req, res) => {
        const insertSql = `INSERT INTO siswa (nama, kelas) VALUES ('${req.body.nama}', '${req.body.kelas}');`
        db.query(insertSql, (err, result) => {
            if(err) throw err
            res.redirect("/")
        })
    })
})

app.listen(8000, () => {
    console.log("Server ready!")
})