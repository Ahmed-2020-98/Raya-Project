import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _AngularFirestore:AngularFirestore) { }

  
  getAllProduct(id:string,name:string):Observable<any[]>{
    return this._AngularFirestore.collection(`/Category/${id}/${name}`).snapshotChanges();
  }

  // addNewProduct(data:any){
  //   return this._AngularFirestore.collection('/Category').add(data);
  // }

  // deleteproduct(id:any){
  //   return this._AngularFirestore.doc(`Category/${id}`).delete()
  // }

}
