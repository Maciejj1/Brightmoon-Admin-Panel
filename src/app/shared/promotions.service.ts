import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Promotion } from '../promotions/Promotion/Promotion';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  constructor(private ars: AngularFirestore) {}

  //add promotion

  addPromotion(promotion: Promotion) {
    promotion.id = this.ars.createId();
    return this.ars.collection('/BrightMoonPromotions').add(promotion);
  }
  // get all Promotions
  getAllPromotions() {
    return this.ars.collection('/BrightMoonPromotions').snapshotChanges();
  }
  // delete promotions
  deletePromotion(promotion: Promotion) {
    return this.ars.doc('/BrightMoonPromotions/' + promotion.id).delete();
  }
  //update promotion

  updatePromotion(promotion: Promotion) {
    this.deletePromotion(promotion);
    this.addPromotion(promotion);
  }
}
