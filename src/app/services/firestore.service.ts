import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private affirestore: AngularFirestore
  ) { }

  getProducts() {
    return this.affirestore.collection('Productos').snapshotChanges();
  }
}
