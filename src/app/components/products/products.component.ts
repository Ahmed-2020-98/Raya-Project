import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from './../../Models/iproduct';
import { elementAt } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories: Icategory[] =[]
  Products: Iproduct[]=[]
  newPrd:Iproduct={} as Iproduct;
  catSelectedId:string=""
  catSelectedName:any=""

  constructor(private _ProductService:ProductService, private _CategoryService:CategoryService) { }




  test(Catval:any){
    this.catSelectedId=Catval
    this.catSelectedName= this.categories.find(x => x.id == Catval)

    this._ProductService.getAllProduct(this.catSelectedId,this.catSelectedName.name).subscribe(data => {
      // console.log(data) // legnth
      this.Products = data.map(element => {
        
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        }
      })
     })
  }


  ngOnInit(): void {
    this._CategoryService.getAllCategory().subscribe(data => {
      this.categories= data.map(element => {
        return {
           id: element.payload.doc.id,
           ...element.payload.doc.data(),
         }
       })
     })
  }


  insertNewProduct(){

  }


}
