import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

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
  total: number = 0;

  constructor( private firestoreService: FirestoreService, private router: Router ) { }

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
    this.totalPrice()
  }

  changeAmount(base:number, item:any){
    // item.amount = item.amount +base
    // console.log("amount",item.amount)
    // console.log("base", item.amount + base)
    if (item.amount && item.amount+base === 0){
      this.deleteItem(item);
    }else{
      item.amount = item.amount + base
      this.totalPrice();
    }
  }

  cancelOrder(){
    this.order =  [];
    this.totalPrice();
  }

  deleteItem(item:any){
    const index = this.order.indexOf(item);
    if(index > -1){
      this.order.splice(index,1);
      this.totalPrice();
    }
    // console.log(this.order);
    return this.order;
  }

  totalPrice() {
    if(this.order.length === 0){
      this.total = 0;
    }else {
      this.total = this.order.map((item)=>item.data.precio*item.amount)
      .reduce((acc,item) => acc += item)
      // console.log(this.total);
    }
  }

  createOrder(client: string){
    if(client.length === 0){
      alert("Por favor coloque el nombre");
    } else {
      this.firestoreService.createOrder(this.order, this.total, client);
      alert("Orden realizada con éxito");
      this.router.navigateByUrl('viewserver/statusorder');
    }
  }
}
