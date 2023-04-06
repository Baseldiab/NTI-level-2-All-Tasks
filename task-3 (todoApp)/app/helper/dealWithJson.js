const fs = require("fs")

class DealWithJson{
    static writeDataJson = (fileName, data) => {
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
    
    static readJsonData = (fileName) => {
        let results
        try {
            results = JSON.parse(fs.readFileSync(fileName))
            if (!Array.isArray(results)) throw new Error("Not an array");
        }
        catch (e) {
            results = []
        }
        return results
        
    }
}
module.exports = DealWithJson