import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  editClicked: boolean = false;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  saveClicked(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
    this.editClicked = false;
  }

  deleteClicked(memberToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")) {
      this.memberService.deleteMember(memberToDelete);
    }
  }

  editButtonlicked() {
    this.editClicked = true;
  }

}
