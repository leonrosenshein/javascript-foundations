class Victim {
    constructor(name) {
        this.name = name
        this.alive = true
    }

    beEaten() {
        this.alive = false
    }
}

module.exports = Victim