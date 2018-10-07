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
  members: Observable<any[]>;
  currentRoute: string = this.router.url;
  desiredFilter: string = "all";
  testSub: Observable<any[]>;

  constructor(public router: Router, public memberService: MemberService) {
    this.members = memberService.getMembers().valueChanges();
    // this.testSub = this.memberService.getMembers().snapshotChanges()
  } // constructor

  ngOnInit(){
  }

  goToDetailPage(clickedMember, index) {
    // console.log('clickedMember = ', clickedMember);
    // console.log('index = ', index);
    // console.log('typeof index = ', typeof index);
    this.router.navigate(['members', index]);
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
