
class Fairy {
    constructor(name) {
        this.name = name
        this.disposition = "Good natured"
        this.dust = 10
        this.humanWards = []
        this.clothes = {
            dresses["Iris"]
        }
    }

    believe() {
        this.dust += 10
    }

    makeDresses(newDresses) {
        this.clothes.dresses.push(newDresses)
    }

    becomeProvoked() {
        this.disposition = "Vengeful"
    }

    replaceInfant(infant) {
        if (this.disposition == "Vengeful") {
            infant.disposition = "Malicious"
        }

        this.humanWards.push(infant)

        if (this.humanWards.length >= 3) {
            this.disposition = "Good natured"
        }
    }
}

module.exports = Fairy