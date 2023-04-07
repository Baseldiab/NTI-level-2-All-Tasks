const deal = require("../helper/dealWithJson")
const fileName = "module/users.json"
class user {

// ===========================================================
    static addPostLogic = (req, res) => {
        const allUsers = deal.readJsonData("module/users.json")
        console.log(allUsers)
        const newUser = { id: Date.now(), ...req.body }
        allUsers.push(newUser)
        deal.writeDataJson("module/users.json", allUsers)
        res.redirect("/")
    }
    static addPost = (req, res) => {
            res.render("addPost", {
                pageTitle: "Add user"
            })
        }
// ============================================================
        static all = (req, res) => {
            const allUsers = deal.readJsonData(fileName)
            res.render("all", {
                pageTitle: "All Data",
                allUsers,
                hasData : allUsers.length
            })
        }
// Edit =========================================================
    static editPost = (req, res) => {
        const allUsers = deal.readJsonData(fileName)
        const id = req.params.id
        const user = allUsers.find(u => u.id == id)
    res.render("edit", {
        pageTitle: "Edit data",
        user
    })
}
static editPostLogic = (req, res) => {
    const allUsers = deal.readJsonData(fileName)
    const id = req.params.id
    const newUser = { id, ...req.body}
    allUsers.forEach((u, i) => {
        if (u.id == id) {
            allUsers[i] = newUser
            return allUsers[i]
        }
    })
    deal.writeDataJson("module/users.json", allUsers)
    res.redirect("/")
}
//================================================================
    static activate = (req, res) => {
        const allUsers = deal.readJsonData(fileName)
        const id = req.params.id
        // let status = req.params.status
        const index = allUsers.findIndex(u => u.id == id)
        if(allUsers[index].status == "false")
            allUsers[index].status = "true" 
    // })
        deal.writeDataJson("module/users.json", allUsers)
        res.redirect("/"
        )
        }
    
//================================================================
    
    static single = (req, res) => {
        const id = req.params.id
        const allUsers = deal.readJsonData(fileName)
        const user = allUsers.find(u => u.id == id)
        res.render("single", {
            pageTitle: "single Data",
            user
        })
    }
    // ==========================================================
    static error = (req, res) => {
        res.render("error404", {
            error: "Page not found"
        })
    }
    // ==========================================================
    static deletAll = (req, res) => {
            deal.writeDataJson("module/users.json", [])
            res.redirect("/")
        }
    // ==========================================================
    static deletSingle = (req, res) => {
        const allUsers = deal.readJsonData(fileName)
        const id = req.params.id
        allUsers.forEach((u, i) => {
            if (u.id == id) {
                allUsers.splice(i, 1)
                deal.writeDataJson("module/users.json", allUsers)
            }
})
            res.redirect("/")
    }
// =============================================================
static search = (req,res)=>{
    const allUsers = deal.readJsonData(fileName)
    const search = req.query.search
    const user = allUsers.find(u => u.title == search  || u.content == search )
    res.render("single", {
        pageTitle: "Search Data",
        user
    })
    
}
// =============================================================
}
module.exports = user
