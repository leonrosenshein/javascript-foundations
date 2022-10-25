class Centaur {
    constructor(info) {
        this.name = info.name
        this.breed = info.type
        this.cranky = false
        this.actionCount = 0
        this.standing = true
        this.layingDown = false
    }

    shootBow() {
        if (this.canDoAction()) {
            return "Twang!!!"
        }
        return "NO!"
    }

    run() {
        if (this.canDoAction()) {
            return "Clop clop clop clop!!!"
        }
        return "NO!"
    }

    layDown() {
        this.setStanding(false)
    }

    standUp() {
        this.setStanding(true)
    }

    sleep() {
        if (this.standing) {
            return "NO!"
        }

        this.makeRested()
        return "ZZZZ"
    }

    drinkPotion() {
        if (this.standing) {
            this.makeRested()
        }

        return "Not while I\'m laying down!"
    }

    makeRested() {
        this.actionCount = 0
        this.cranky = false
    }

    setStanding(isStanding) {
        this.standing = isStanding
        this.layingDown = !isStanding
    }

    canDoAction() {
        if (this.layingDown) {
            return false
        }

        this.actionCount++
        this.cranky = this.actionCount > 2
        return !this.cranky
    }
}

module.exports = Centaur