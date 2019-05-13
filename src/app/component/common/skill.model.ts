export class Skill {

    constructor(
        public name: string, 
        public logo: string, 
        public site: string
    ) { }

}

const Armin = new Skill('Armin', 'Coloss', 'Rosa');
const Eren = new Skill('Eren', 'Attack', 'Rosa');
const Mikasa = new Skill('Mikasa', 'Spe', 'Rosa');
const Livail = new Skill('Livail', 'ChefSpe', 'Rosa');
const Bertolt = new Skill('Bertolt', 'PastColoss', '???');

export { Armin, Eren, Mikasa, Livail, Bertolt };