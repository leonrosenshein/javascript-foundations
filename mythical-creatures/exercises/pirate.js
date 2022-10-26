class Pirate {
    constructor(name, job) {
        this.name = name
        this.job = job || "scallywag"
        this.cursed = false
        this.robCount = 0
        this.booty = 0
    }

    robShip() {
        if (!this.cursed) {
            this.robCount++
            this.booty += 100
            if (this.robCount >= 5) {
                this.cursed = true
            }
            return "YAARRR!"
        } else {
            return "ARG! I\'ve been cursed!"
        }
    }

    liftCurse() {
        if (this.cursed) {
            if (this.booty >= 300) {
                this.booty -= 300
                this.cursed = false
                this.robCount = 0
                return "Your curse has been lifted!"
            }
        } else {
            return "You don\'t need to lift a curse!"
        }
    }
}

module.exports = Pirate