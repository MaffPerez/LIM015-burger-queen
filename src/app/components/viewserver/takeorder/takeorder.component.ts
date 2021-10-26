import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-takeorder',
  templateUrl: './takeorder.component.html',
  styleUrls: ['./takeorder.component.scss']
})
export class TakeorderComponent implements OnInit {
  allProducts:any[]  = [];
  menu:any[] = [];
  order: any[] = [];
  base: number = 1;

  constructor( private firestoreService: FirestoreService ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.firestoreService.getProducts().subscribe((data) => {
      data.forEach((item) => {
        this.allProducts.push({
          data:item.payload.doc.data(),
          id:item.payload.doc.id
        })
      })
    })
  }

  filteredMenu($event:any){
    this.menu = this.allProducts.filter((item) => item.data.turno == $event.target.value)
    // console.log(this.menu)
  }

  addOrder(id:any, data:Object){
    this.order.push({
      id,
      data,
      amount: 1
    })
    console.log(this.order)
  }

  changeAmount(base:number, item:any){
    item.amount += base
  }

}
