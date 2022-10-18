import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Products } from '../dashboard/Products/products';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  // add product
  addProduct(product: Products) {
    product.id = this.afs.createId();
    return this.afs.collection('/BrightMoonProducts').add(product);
  }

  // get all products
  getAllProducts() {
    return this.afs.collection('/BrightMoonProducts').snapshotChanges();
  }

  // delete product

  deleteProduct(product: Products) {
    return this.afs.doc('/BrightMoonProducts/' + product.id).delete();
  }
  //update product

  updateProduct(product: Products) {
    this.deleteProduct(product);
    this.addProduct(product);
  }
}
