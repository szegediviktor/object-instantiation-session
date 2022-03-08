class tennisPlayers {
    constructor(name) {
        this.name = name;
    }
    getStatus() {
        return "is a good player";
    }
}

const player = new tennisPlayers("Daniil Medvedev");

// console.log(player.name);
// console.log(player.getPlayerName());

class valami extends tennisPlayers {
    atp = [];
    constructor(name, rank) {
        super(name);
        this.rank = rank;
    }
    getFullAtp() {
        this.atp.push(this.name);
        // console.log(this.atp);
        return this.atp;
    }
}

const playerNameWithRank = new valami("Medvedev", 1);

// console.log(playerNameWithRank.atp);
// console.log(playerNameWithRank.name);
// console.log(playerNameWithRank.rank);
console.log(playerNameWithRank.getFullAtp());
