import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service'

@Component({
  selector: 'app-statusorder',
  templateUrl: './statusorder.component.html',
  styleUrls: ['./statusorder.component.scss']
})
export class StatusorderComponent implements OnInit {
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
}

