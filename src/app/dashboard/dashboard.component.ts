import { Component, OnInit, Output } from '@angular/core';
import { Text } from '../Database/text';
import { NavBarTexts } from '../Database/texts';
import { Products } from './Products/products';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sales = 'assets/images/sales-icon.png';
  expanses = 'assets/images/expanses-icon.png';
  income = 'assets/images/income-icon.png';
  plus = 'assets/images/plus-icon.png';
  user = 'assets/images/user-avatar.png';
  customer = 'assets/images/customer-picture.png';
  display = false;
  displayModal() {
    this.display = true;
    console.log('Modal', this.display);
  }
  productsList: Products[] = [];
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

  constructor(
    private auth: AuthService,
    private data: DataService,
    public modal: ModalService
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
  }
  dashboardtexts: Text[] = NavBarTexts;
  // register() {
  //   this.auth.logout();
  // }

  getAllProducts() {
    this.data.getAllProducts().subscribe((res) => {
      this.productsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
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
  updateProduct() {}
  deleteProduct(product: Products) {
    if (
      window.confirm(
        'Are you sure to delete?' +
          product.ProductName +
          '' +
          product.ProductNumber
      )
    )
      this.data.deleteProduct(product);
  }
}
