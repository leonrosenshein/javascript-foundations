class Unicorn {
    constructor(name, color) {
        this.name = name;
        this.color = color || "white";
    }

    isWhite() {
        return this.color == "white"
    }

    says(saying) {
        return `**;* ${saying} *;**`
    }
}

module.exports = Unicorn;
