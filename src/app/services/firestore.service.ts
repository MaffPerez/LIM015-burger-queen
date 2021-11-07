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

  createOrder(order:any[], total:number, client:string){
    return this.affirestore.collection('orders').add({
      order,
      total,
      client,
      status:"pendiente",
      hour: new Date(),
    })
  }

  getOrder() {
    return this.affirestore.collection('orders').snapshotChanges();
  }

  updateStatus(id:string){
    return this.affirestore.collection('orders').doc(id).update({status:"listo"})
  }
}
