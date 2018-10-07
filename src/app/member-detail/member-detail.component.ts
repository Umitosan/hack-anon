import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
// import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})

export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay: Observable<any>;
  memServ: any;
  afDB: any;

  constructor(public db: AngularFireDatabase, private route: ActivatedRoute, private location: Location, private memberService: MemberService) {
    this.afDB = db;
    this.memServ = memberService;
    this.memberId = this.route.params['_value']['id'];
    console.log("this.memberId = ", this.memberId);
  }

  ngOnInit() {
    this.memberToDisplay = this.memServ.getMemberById(this.memberId);
  }

}
