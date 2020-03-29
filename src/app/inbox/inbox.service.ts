import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { map } from 'rxjs/operators';
import { Inbox } from './inbox.model';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getAllInbox() {
    return this.afs.collection('inbox').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Inbox;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getInboxById(id) {
    return this.afs.doc<Inbox>('inbox/'+id).valueChanges();
  }
}
