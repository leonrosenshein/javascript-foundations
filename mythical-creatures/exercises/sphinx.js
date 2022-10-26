class Sphinx {
    constructor(name) {
        this.name = name || "Unnamed"
        this.riddles = []
        this.heroesEaten = 0
    }

    collectRiddle(riddle) {
        if (this.riddles.length == 3) {
            this.riddles.shift()
        }
        this.riddles.push(riddle)
    }

    attemptAnswer(answer) {
        var index = this.riddles.findIndex(r => r.answer == answer)
        if (index >= 0) {
            this.riddles.splice(index, 1)

            if (this.riddles.length == 0) {
                return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
            }
            return "That wasn\'t that hard, I bet you don\'t get the next one"
        }

        this.heroesEaten++
    }
}

module.exports = Sphinx