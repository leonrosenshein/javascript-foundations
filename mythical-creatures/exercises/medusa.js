var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    }

    gazeAtVictim(victim) {
        var oldVictim
        if (this.statues.length > 2) {
            oldVictim = this.statues.shift()
        }

        var newStatue = new Statue(victim.name)
        this.statues.push(newStatue)

        if (oldVictim) {
            return new Person(oldVictim.name, "relieved")
        }

        return
    }
}

module.exports = Medusa