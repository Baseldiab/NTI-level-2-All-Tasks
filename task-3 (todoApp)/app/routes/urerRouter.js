const userController = require("../controller/users.controller")

const router = require("express").Router()

router.get("/", userController.all)

router.post("/addPostLogic", userController.addPostLogic)
router.get("/addPost", userController.addPost)    

router.post("/editPostLogic/:id", userController.editPostLogic)
router.get("/editPost/:id", userController.editPost)

router.get("/deletAll", userController.deletAll)

router.get("/activate/:id", userController.activate)

router.get("/deletSingle/:id", userController.deletSingle)
router.get("/single/:id", userController.single)    
router.get("/error", userController.error)

module.exports =router