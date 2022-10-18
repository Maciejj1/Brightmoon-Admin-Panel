import { Component, OnInit } from '@angular/core';
import { Client } from '../clients/Clients/Client';
import { ClientsService } from '../shared/clients.service';
import { Promotion } from './Promotion/Promotion';
import { PromotionsService } from '../shared/promotions.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  ngOnInit(): void {
    this.getAllPromotions();
  }
  PromotionList: Promotion[] = [];
  PromotionObj: Promotion = {
    id: '',
    name: '',
    code: '',
    value: 0,
    time: '',
  };
  id: string = '';
  name: string = '';
  code: string = '';
  value: number = 0;
  time: string = '';

  constructor(private promotiones: PromotionsService) {}
  getAllPromotions() {
    this.promotiones.getAllPromotions().subscribe((res) => {
      this.PromotionList = res.map((e: any) => {
        const promotiones = e.payload.doc.data();
        promotiones.id = e.payload.doc.id;
        return promotiones;
      });
    });
  }
  resetForm() {
    this.id = '';
    this.name = '';
    this.code = '';
    this.value = 0;
    this.time = '';
  }
  addPromotion() {
    if (
      this.name == '' ||
      this.code == '' ||
      this.value == 0 ||
      this.time == ''
    ) {
      alert('Wypełnij pola');
      return;
    }
    this.PromotionObj.id = '';
    this.PromotionObj.name = this.name;
    this.PromotionObj.code = this.code;
    this.PromotionObj.value = this.value;
    this.PromotionObj.time = this.time;
    this.promotiones.addPromotion(this.PromotionObj);
    this.resetForm();
  }

  deletePromotion(promotion: Promotion) {
    if (window.confirm('Are you sure to delete ' + promotion.name + ' ?'))
      this.promotiones.deletePromotion(promotion);
  }
}
