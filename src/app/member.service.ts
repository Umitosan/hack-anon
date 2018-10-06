import { Injectable } from '@angular/core';
import { Member } from './member.model';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()

export class MemberService {
  // members: FirebaseListObservable<any[]>;
  members: AngularFireList<any[]>;
  database: AngularFireDatabase;

  constructor(private db: AngularFireDatabase) {
    this.members = db.list('members');
    this.database = db;
  }

  getMembers() {
    return this.members.valueChanges();
  }

  addMember(newMember: Member) {
    // this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.database.object('/members/' + memberId);
  }

  updateMember(localUpdatedMember){
    let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                              role: localUpdatedMember.role,
                              tech: localUpdatedMember.tech,
                              years: localUpdatedMember.years,
                              bio: localUpdatedMember.bio});
  }

  deleteMember(localMemberToDelete){
    let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

}

//
//   updateAlbum(localUpdatedAlbum){
//     var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
//     albumEntryInFirebase.update({title: localUpdatedAlbum.title,
//                               artist: localUpdatedAlbum.artist,
//                               description: localUpdatedAlbum.description});
//   }
//
//   deleteAlbum(localAlbumToDelete){
//     var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
//     albumEntryInFirebase.remove();
//   }
//
// }
