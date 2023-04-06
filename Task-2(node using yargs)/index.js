const yargs = require("yargs")
const deal = require('./modules/dealWithJson')
const user = require("./modules/user")
// const task = require("./modules/task")

// ===========================
yargs.command({
    command:"addUser",
    builder:{
        name:{ demandOption: false},
        age:{ demandOption: false},
        email:{demandOption:false}
    },
    handler:(argv)=>{
        user.addUser(argv)
    }
})
// ===========================
yargs.command({
    command:"showAll",
    handler: ()=> user.showAll()
})
// ===========================
yargs.command({
    command:"showSingle",
    builder:{ id:{demandOption:true}},
    handler: (argv)=> user.showSingle(argv)
})
// ===========================
yargs.command({
    command:"deleteAll",
    handler: (argv)=> user.deleteAll(argv)
})
// ===========================

yargs.command({
    command:"deleteSingleById",
    builder:{ id:{demandOption:true}},
    handler: (argv)=> user.deleteSingleById(argv)
})
// ===========================
yargs.command({
    command:"editUserById",
    builder: {
        id: { demandOption: true },
        name:{ demandOption: true},
        age:{ demandOption: true},
        email: { demandOption: true }
    },
    handler: (argv)=> user.editUserById(argv)
})
// ===========================

yargs.argv


