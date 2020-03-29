import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, LoginUser } from './user.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<LoginUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<LoginUser> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email
    }

    return userRef.set(data, { merge: true })

  }

  async login(user: User) {
    return await this.afAuth.signInWithEmailAndPassword(user.login, user.password);
  }

  async registration(user: User) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(user.login, user.password);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/auth/login']);
  }

}
