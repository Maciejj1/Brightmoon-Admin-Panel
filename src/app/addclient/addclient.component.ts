import { Component, OnInit, Output } from '@angular/core';
import { ModalService } from '../shared/modal.service';
import { ClientsService } from '../shared/clients.service';
import { Client } from '../clients/Clients/Client';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss'],
})
export class AddclientComponent implements OnInit {
  @Output() display = false;
  constructor(public modal: ModalService, private clients: ClientsService) {}
  close = 'assets/images/close.png';
  ngOnInit(): void {}
  closeModal() {
    this.display = true;
  }
  clientObj: Client = {
    id: '',
    name: '',
    surname: '',
    email: '',
    tel: '',
  };
  resetForm() {
    this.id = '';
    this.name = '';
    this.surname = '';
    this.email = '';
    this.tel = '';
  }
  id: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  tel: string = '';
  addClient() {
    if (
      this.name == '' ||
      this.surname == '' ||
      this.email == '' ||
      this.tel == ''
    ) {
      alert('Please , fill the inputs');
      return;
    }
    this.clientObj.id = '';
    this.clientObj.name = this.name;
    this.clientObj.surname = this.surname;
    this.clientObj.email = this.email;
    this.clientObj.tel = this.tel;
    this.clients.addClient(this.clientObj);
    this.resetForm();
  }
}
