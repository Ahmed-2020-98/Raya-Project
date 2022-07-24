import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Icategory } from 'src/app/Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _AngularFirestore:AngularFirestore) { }

  getAllCategory():Observable<any[]>{
    return this._AngularFirestore.collection('/Category').snapshotChanges();
  }

  addNewCategory(data:any){
    return this._AngularFirestore.collection('/Category').add(data);
  }

  deleteCategory(id:any){
    return this._AngularFirestore.doc(`Category/${id}`).delete()
  }

}

