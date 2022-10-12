import { Component, OnInit, Output } from '@angular/core';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  @Output() display = false;
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}
  closeModal() {
    this.display = true;
  }
}
