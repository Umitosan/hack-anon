import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  showNewMemberForm = false;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  addMemberClicked() {
    this.showNewMemberForm = true;
  }


  submitForm(name: string, role: string, tech: string, years: number, bio: string) {
    var newMember: Member = new Member(name, role, tech, years,bio);
    this.memberService.addMember(newMember);
    this.showNewMemberForm = false;
  }

  // member model
  // public name: string,
  // public role: string,
  // public tech: string,
  // public years: number,
  // public bio: string

}
