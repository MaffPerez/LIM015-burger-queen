import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-takeorder',
  templateUrl: './takeorder.component.html',
  styleUrls: ['./takeorder.component.scss']
})
export class TakeorderComponent implements OnInit {
  allProducts:any[]  = [];
  product:any[] = [];

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

  filteredProduct($event:any){
    this.product = this.allProducts.filter((item) => item.data.turno == $event.target.value)
    console.log(this.product)
  }
}
