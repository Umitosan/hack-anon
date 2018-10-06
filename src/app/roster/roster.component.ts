import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
// import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [MemberService]
})

export class RosterComponent implements OnInit {
  memberSub: Subscription;
  // members: FirebaseListObservable<any[]>;
  members: AngularFireList<any[]>;
  currentRoute: string = this.router.url;
  desiredFilter: string = "all";

  constructor(public router: Router, public memberService: MemberService) {
    this.memberSub = memberService.getMembers().subscribe(data => {
      this.members = data;
      console.log("members from DB: ", data);
    });
  }

  ngOnInit(){
    // this.members = this.memberService.getMembers();
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
