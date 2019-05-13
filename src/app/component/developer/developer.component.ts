import { Component, OnInit } from '@angular/core';
import { firstChara, secondChara, thirdChara, fourthChara, fifthChara } from '../common/developer.model';
import { Armin, Eren, Mikasa, Livail, Bertolt } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developers = [];
  skills = [];

  newTab = [firstChara, secondChara, thirdChara, fourthChara, fifthChara];
  skillTab = [Armin, Eren, Mikasa, Livail, Bertolt];


  constructor() { }

  ngOnInit() {

    this.developerTabCraft();
    this.skillTabCraft();

  }

  skillTabCraft() {

      for (let i = 0; i < 4; i++) {
        this.skills.push(Object.values(this.skillTab[i]));
      }

  }

  developerTabCraft() {

    for (let i = 0; i < 5; i++) {
      this.developers.push(Object.values(this.newTab[i]));
    }
    console.log(this.developers)

  }

}
