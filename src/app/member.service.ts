import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable, Subscription } from 'rxjs';

@Injectable()

export class MemberService {
  members: AngularFireList<any>;
  // members: AngularFireObject<any>;
  afDB: AngularFireDatabase;
  testSub: Subscription;
  testArr: any[];

  constructor(private db: AngularFireDatabase) {
    // NOTE: db.list('members')                is TYPE AngularFireList<any[]>
    // NOTE: db.list('members').valueChanges() is TYPE  Observable<any[]>
    this.afDB = db;
    this.members = db.list('members');
    // this.members = db.object('members');
    this.testSub = db.object('members').valueChanges().subscribe( function(memObj) {
      // console.log(memObj);
      let myArr = [];
      // note that object's members have no normal order
      Object.entries(memObj).forEach((item) => {
        // console.log("item = ", item);
        myArr.push( {[item[0]]: item[1]});
      });
      console.log(myArr);
      // this.testMem = mem;
    });
  }

//   Object.entries(object).forEach(([key, value], index) => {
//   console.log(`${index}: ${key} = ${value}`);
// });

  getMembers() {
    // return this.members.valueChanges();
    // return this.members.shapshotChanges();
    return this.members;
  }

  addMember(newMember: any) {
    // (public name: string, public role: string, public tech: string, public years: number, public bio: string)
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    console.log('getMemberById trying index: ', memberId);
    return this.afDB.object('members/'+memberId).valueChanges();
  }

  // updateMember(localUpdatedMember){
  //   let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
  //   memberEntryInFirebase.update({name: localUpdatedMember.name,
  //                             role: localUpdatedMember.role,
  //                             tech: localUpdatedMember.tech,
  //                             years: localUpdatedMember.years,
  //                             bio: localUpdatedMember.bio});
  // }
  //
  // deleteMember(localMemberToDelete){
  //   let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
  //   memberEntryInFirebase.remove();
  // }

}
