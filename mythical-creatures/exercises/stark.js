var Direwolf = require('./direwolf.js');
class Stark {
    constructor(starkInfo) {
        this.name = starkInfo.name
        this.safe = false
        this.location = starkInfo.area || "Winterfell"
    }

    setSafe(isSafe) {
        this.safe = isSafe
    }

    sayHouseWords() {
        if (this.safe) {
            return ("The North Remembers")
        }
        return "Winter is Coming"
    }

    callDirewolf(wolfName, wolfLocation, wolfSize) {
        var direwolf = new Direwolf(wolfName, this.location, wolfSize)
        direwolf.protect(this)
        return direwolf
    }

}

module.exports = Stark