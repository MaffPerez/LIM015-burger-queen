import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service'

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.scss']
})
export class PendingOrderComponent implements OnInit {
  orders: any [] =[];

  constructor(private firestoreService: FirestoreService ) { }

  ngOnInit(): void {
    this.getOrder();
  }
    // Funcion para traer las ordenes de firebase
  getOrder(){
    this.firestoreService.getOrder().subscribe((data) => {
      this.orders = [];
      data.forEach((item) => {
        this.orders.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        });
      })
    })
    // Comprobar en la consola que lee las ordenes de firebase
    console.log(this.orders)
  }

  updateStatus (id:string) {
    this.firestoreService.updateStatus(id);
   }
}
