import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import 'firebase/firestore';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  userDetails;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.userDetails = user;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          this.userDetails = null;
          return of(null);
        }
      })
    )
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }

  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
  }

  // get authenticated(): boolean {
  //   if (this.userDetails == null) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // get currentUserId(): string {
  //   return this.userDetails == null ? this.userDetails.uid : '';
  // }
}
