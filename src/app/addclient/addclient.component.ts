import { Component, OnInit, Output } from '@angular/core';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss'],
})
export class AddclientComponent implements OnInit {
  @Output() display = false;
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}
  closeModal() {
    this.display = true;
  }
}
