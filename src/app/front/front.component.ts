import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  members: Member[] = [
      new Member("Morpheus","clan leader","Mind","Badass leader of the underground resistance against cyborg overloards"),
      new Member("Cypher","master of tech","anything that runs on electricity",""),
      new Member("Trinity","head of intel","Mind/body connection","Pwning your backyard"),
      new Member("Tank","head of enforcement","","Doing all the dirty work so you can sit on your ass")
  ];

  constructor() { }

  ngOnInit() {
  }

}


// member model
// name
// role
// tech
// bio
