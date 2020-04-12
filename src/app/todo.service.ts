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
    const uid = this.authService.userDetails.uid;
    this.afs.collection('todos').add({test: 'sdfdfs', uid: uid})
  }

  getAllTodo() {
    console.log(this.authService.userDetails);
    const uid = this.authService.userDetails.uid;
    // return this.afs.collection('todos').valueChanges();
    return this.afs.collection('todos', ref => ref.where('uid', '==', uid)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Test;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    // return this.afs.collection('todos', ref => ref.where('uid', '==', uid)).valueChanges();
  }

  removeTodo(id) {
    console.log(id);
    this.afs.doc(`todos/${id}`).delete();
  }

  editTodo(todo) {
    todo.test = 'update';
    this.afs.doc(`todos/${todo.id}`).update(todo);
  }
}
