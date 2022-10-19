class Hobbit {
    constructor(hobbit) {
        if (this.name === 'Frodo') {
            this.hasRing = true
        } else {
            this.hasRing = false
        }
        this.name = hobbit.name
        this.age = 0
        this.adult = false
        this.old = false
    }
    celebrateBirthday() {
        this.age = this.age + 1
        if (this.age > 32) {
            this.adult = true
        }
        if (this.age > 100) {
            this.old = true
        }
    }
    getRing() {
        if (this.hasRing === false) {
            return `Here is the ring!`
        } else {
            return `You can\`t have it!`
        }
    }
}