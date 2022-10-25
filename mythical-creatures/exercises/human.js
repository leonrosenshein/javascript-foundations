class Human {
    constructor(name) {
        this.name = name
        this.encounterCounter = 0
        this.knockedOut = false
    }

    noticesOgre() {
        return this.encounterCounter > 0 && this.encounterCounter % 3 == 0
    }

    encounter() {
        this.encounterCounter++
    }

    knockOut(isNockedOut) {
        this.knockedOut = isNockedOut
    }
}

module.exports = Human