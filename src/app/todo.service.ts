import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

export interface Test { test: string; }

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) { 
  }

  addTodo() {
    const uid = this.authService.currentUserId;
    this.afs.collection('todos').add({test: 'sdfdfs', uid: uid})
  }

  getAllTodo() {
    const uid = this.authService.currentUserId;
    return this.afs.collection('todos', ref => ref.where('uid', '==', uid)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Test;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
