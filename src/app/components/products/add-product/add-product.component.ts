import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  catList:Icategory[];
  newPrd:Iproduct={} as Iproduct;
  constructor() { 
    this.catList=[
      {id:"1",name: 'LabTop'},
      {id:"2",name: 'TV'},
      {id:"3",name: 'Mobile'},
    ]
  }

  ngOnInit(): void {
  }

  insertNewProduct(){}
}
