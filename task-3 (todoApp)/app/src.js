const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
// ================
// View static partials
const myStaticDire = path.join(__dirname, "../resources/public")
const myViewDire = path.join(__dirname, "../resources/views")
const myPartialDire = path.join(__dirname, "../resources/layouts")
// ================
app.use(express.static(myStaticDire))
app.set("view engine", "hbs")
app.set("views", myViewDire)
// ================
hbs.registerPartials(myPartialDire)

app.use(express.urlencoded({extended:true}))
const userRouter = require("./routes/urerRouter")
app.use(userRouter)
// ===============
app.all("*", (req, res) => {
    res.render("error404", {
        error: "Page not found"
    })
})
// ===============
module.exports = app