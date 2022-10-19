class Magician {
    constructor(initData) {
        this.name = "The Great " + initData.name
        this.assistant = initData.assistant
        this.confidencePercentage = 10

        if (initData.clothing) {
            this.favoriteAccessory = initData.clothing
        } else {
            this.favoriteAccessory = "top hat"
        }
    }

    performIncantation(magicWord) {
        return `${magicWord.toUpperCase()}!`
    }

    performTrick() {
        this.confidencePercentage = this.confidencePercentage + 10
        if (this.favoriteAccessory == "cape") {
            return `PULL DOVE FROM SLEEVE`
        }
        return `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`
    }

    performShowStopper() {
        if (!this.assistant || this.confidencePercentage < 100) {
            return "Oh no, this trick is not ready!"
        }

        return "WOW! The magician totally just sawed that person in half!"
    }
}

module.exports = Magician