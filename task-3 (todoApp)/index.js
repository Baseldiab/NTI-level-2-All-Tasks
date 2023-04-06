const app = require("./app/src")
require('dotenv').config()

app.listen(process.env.port,
    () => console.log(`you are on http://localhost:${process.env.port}`))