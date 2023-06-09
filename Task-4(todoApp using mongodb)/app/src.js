const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
//views static partials
const myStaticDir = path.join(__dirname, "../resources/public")
const myViewsDir = path.join(__dirname, "../resources/views")
const myPartialDir = path.join(__dirname, "../resources/layouts")

app.use(express.static(myStaticDir))
app.set("view engine", "hbs")
app.set("views", myViewsDir)
hbs.registerPartials(myPartialDir)

app.use(express.urlencoded({ extended: true }))

const userRoutes = require("./routes/user.routes")
const exp = require("constants")
app.use(userRoutes)
app.all("*", (req,res)=> res.render("err404", { pageTitle:"Error in page"} ) )
module.exports = app
