
class Dragon {
    constructor(dragonName, riderName) {
        this.name = dragonName
        this.rider = riderName
        this.hungry = true
        this.eatCount = 0
    }

    eat() {
        this.eatCount++
        if (this.eatCount >= 3) {
            this.hungry = false
        }
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
}

module.exports = Dragon
