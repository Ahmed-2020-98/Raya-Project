import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { CategoryService } from '../../services/category.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Icategory[] =[]
 
  constructor(private _CategoryService:CategoryService) { }

  addCategory = new FormGroup({
    name: new FormControl('')
  })

  addNewCat(){
    return this._CategoryService.addNewCategory(this.addCategory.value)
  }

  deleteCat(id:any){
    return this._CategoryService.deleteCategory(id)
  }

  ngOnInit(): void {
     this._CategoryService.getAllCategory().subscribe(data => {
      
     this.categories= data.map(element => {
      // console.log(element.payload.doc.data()) // data 
       return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      })

    })

    
  }

  
}
