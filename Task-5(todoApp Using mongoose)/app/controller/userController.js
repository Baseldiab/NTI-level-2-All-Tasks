const deal = require("../helper/dealWithJson")
const connectDb = require("../../models/dbConnect")
const fileName = "models/users.json"
const userModel = require("../../models/myModels/user.model")
const { query } = require("express")

class User {
    static add = (req, res) => {
        res.render("add", {
            pageTitle: "Add Data"
        })
    }
    static addLogic = async (req, res) => {
        try {
            const data = new userModel(req.query)
            await data.save()
            res.redirect("/")
        }
        catch (e) {
            res.send(e)
        }
    }

    static addPost = (req, res) => {
        res.render("addPost", {
            pageTitle: "Add Data"
        })
    }
    
    static addPostLogic = async (req, res) => {
        try {
            connectDb(async (db) => {
                await db.collection("users").insertOne(req.body)
                res.redirect("/")
            })
        }
        catch (e) {
            res.send(e)
        }
    }

    static all = async (req, res) => {
        try {
            const allUsers = await userModel.find()
            res.render("all", {
                pageTitle: "All Data",
                allUsers,
                hasData: allUsers.length
            })
        }
        catch (e) {
            res.send(e.message)
        }
    }
    
    static edit = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            res.render("edit", {
                pageTitle: "Edit Data",
                user
            })
        }
        catch (e) {
            res.send(e.message)
        }
    }
    static editLogic = async (req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate(req.params.id , req.query , {runValidators: true} )
            
            res.redirect(`/single/${req.params.id}`)
            user
        }
        catch (e) {
            res.send(e.message)
        }
    }
    static single = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            res.render("single", {
                pageTitle: "single Data",
                user
            })
        }
        catch (e) {
            res.send(e.message)
        }
    }
    static del = async (req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch (e) {
            res.send(e.message)
        }
    }

    static delAll = async (req, res) => {
        try {
            await userModel.deleteMany()
            res.redirect("/")
        }
        catch (e) {
            res.send(e.message)
        }
    }
}
module.exports = User