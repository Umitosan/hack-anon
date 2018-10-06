import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
// import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [MemberService]
})

export class RosterComponent implements OnInit {
  testSub: Subscription;
  memTest: any;
  // members: FirebaseListObservable<any[]>;
  // members: AngularFireList<any[]>;
  members: Observable<any[]>;
  currentRoute: string = this.router.url;
  desiredFilter: string = "all";

  constructor(public router: Router, public memberService: MemberService) {
    this.members = memberService.getMembers();
    this.testSub = memberService.getMembers().subscribe(data => {
      this.memTest = data;
      console.log("memTest: ", data);
    });
  }

  ngOnInit(){
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

  onChange(dropdownOption) {
    this.desiredFilter = dropdownOption;
  }

}


// member model
// name
// role
// tech
// years
// bio
