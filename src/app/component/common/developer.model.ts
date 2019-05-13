import { Skill, Armin, Bertolt, Livail, Eren, Mikasa } from './skill.model';

export class Developer {

    constructor(
        public lastName:string,
        public firstName:string,
        public age: number,
        public sexe: string,
        public bio: string,
        public skills: Skill
    ) { }

}

const firstChara = new Developer('Jager', 'Armin', 15, 'M', 'SNK', Armin);
const secondChara = new Developer('Jager', 'Eren', 15, 'M', 'SNK', Eren);
const thirdChara = new Developer('Ackerman', 'Mikasa', 15, 'F', 'SNK', Mikasa);
const fourthChara = new Developer('Ackerman', 'Livail', 19, 'M', 'SNK', Livail);
const fifthChara = new Developer('???', 'Bertolt', 18, 'M', 'SNK', Bertolt);

export { firstChara, secondChara, thirdChara, fourthChara, fifthChara };