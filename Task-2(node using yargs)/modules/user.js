const { argv } = require('yargs')
const deal = require('./dealWithJson')

const userHeads = ["id", "name", "age", "email"]
// ==========================================================
const createObj=(data)=>{ 
    const userData = { }
    userHeads.forEach(h=>{
        if(h=="id") userData[h]= Date.now()
        else userData[h]= data[h]
    })
    return userData
}
// ==========================================================
const EditObj=(data)=>{ 
    const userData = { }
    userHeads.forEach(h=>{
        if(h=="id") userData[h]==argv[h]
        else userData[h]= data[h]
    })
    return userData
}
// ==========================================================
class User{
    static addUser = (argv) =>{
        const userData = createObj(argv)
        const data = deal.readJsonData("users.json")
        data.push(userData)
        deal.writeJsonData("users.json", data)
    }
    // ================================
    static showAll = ()=>{
        const allUsers = deal.readJsonData("users.json")
        if(!allUsers.length) {
            console.log("No users yet")
            return
        }
        allUsers.forEach((u, ind)=>{
            console.log(`${ind+1} - ${u.name} - ${u.id} - ${u.email}`)
        })
    }
    // ================================
    static showSingle = (argv)=>{
        const allUsers = deal.readJsonData("users.json")
        const singleUser = allUsers.find(u=> u.id == argv.id)
        if(!singleUser) console.log("no user with this id")
        else console.log(singleUser)
    }
    // ================================
    static showAll = ()=>{
        const allUsers = deal.readJsonData("users.json")
        if(!allUsers.length) {
            console.log("No users yet")
            return
        }
        allUsers.forEach((u, ind)=>{
            console.log(`${ind+1} - ${u.name} - ${u.id} - ${u.email}`)
        })
    }
    // ================================
    static deleteAll = (argv) => {
        deal.writeJsonData("users.json", [])
    }
    // ================================
    static deleteSingleById = (argv) => {
        const data = deal.readJsonData("users.json")
        // const singleUser = data.find(u => u.id == argv.id)
        data.forEach((u, i) => {
            if (u.id == argv.id) {
                data.splice(i,1)
                deal.writeJsonData("users.json", data)
            } else {
                console.log("No users yet")
            }
        })
        this.showAll()
    }
    // ================================
    static editUserById = (argv)=>{
        const data = deal.readJsonData("users.json")
        const userData = EditObj(argv)
        // const singleUser = data.find(u => u.id == argv.id)
        // if (singleUser != -1) {
        //     console.log("User not found")
        // }
        // for (const key in argv) {
        //     if (userHeads.includes(key)) {
        //         data[ind][key] == argv[key]
        //     }
        // }
        data.forEach((u, i) => {
            if (u.id == argv.id) {
                data[i] = userData
                return data[i]
            }
        })
        data.push(userData)

        deal.writeJsonData("users.json", data)
    }
    // ==========================================================
}
module.exports = User