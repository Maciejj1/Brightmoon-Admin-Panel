import { Component, OnInit, Output } from '@angular/core';
import { ModalService } from '../shared/modal.service';
import 'src/styles.scss';
import { DataService } from '../shared/data.service';
import { Products } from '../dashboard/Products/products';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  @Output() display = true;
  constructor(public modal: ModalService, private data: DataService) {}
  close = 'assets/images/close.png';
  ngOnInit(): void {}
  closeModal() {
    this.display = false;
  }
  productObj: Products = {
    id: '',
    ProductName: '',
    ProductNumber: '',
    ProductPayment: '',
    ProductStatus: '',
  };
  id: string = '';
  ProductName: string = '';
  ProductNumber: string = '';
  ProductPayment: string = '';
  ProductStatus: string = '';
  resetForm() {
    this.id = '';
    this.ProductName = '';
    this.ProductNumber = '';
    this.ProductPayment = '';
    this.ProductStatus = '';
  }
  addProduct() {
    if (
      this.ProductName == '' ||
      this.ProductNumber == '' ||
      this.ProductPayment == '' ||
      this.ProductStatus == ''
    ) {
      alert('Wypełnij pola');
      return;
    }
    this.productObj.id = '';
    this.productObj.ProductName = this.ProductName;
    this.productObj.ProductNumber = this.ProductNumber;
    this.productObj.ProductPayment = this.ProductPayment;
    this.productObj.ProductStatus = this.ProductStatus;
    this.data.addProduct(this.productObj);
    this.resetForm();
  }
}
