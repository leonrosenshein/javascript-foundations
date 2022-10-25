class Direwolf {
    constructor(name, home, size) {
        this.name = name
        this.home = home || "Beyond the Wall"
        this.size = size || "Massive"
        this.huntsWhiteWalkers = true
        this.starksToProtect = []
    }

    protect(stark) {
        if (this.home == stark.location && this.starksToProtect.length < 2) {
            this.starksToProtect.push(stark)
            stark.setSafe(true)
            this.huntsWhiteWalkers = false
        }
    }

    leave(stark) {
        var index = this.starksToProtect.indexOf(stark)
        if (index >= 0) {
            this.starksToProtect.splice(index, 1)
            stark.setSafe(false)
        }
    }
}

module.exports = Direwolf