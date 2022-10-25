class Ogre {
    constructor(info) {
        this.name = info.name
        this.home = info.abode || "Swamp"
        this.swings = 0
    }

    encounter(human) {
        human.encounter()
        if (human.noticesOgre()) {
            this.swingAt(human)
        }
    }

    swingAt(human) {
        this.swings++
        if (this.swings > 1) {
            human.knockOut(true)
        }
    }

    apologize(human) {
        human.knockOut(false)
    }
}

module.exports = Ogre