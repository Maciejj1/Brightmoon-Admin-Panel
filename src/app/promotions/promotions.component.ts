import { Component, OnInit } from '@angular/core';
import { Client } from '../clients/Clients/Client';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  ngOnInit(): void {
    this.getAllClients();
  }
  display = false;
  displayModal() {
    this.display = true;
  }
  clientList: Client[] = [];
  clientObj: Client = {
    id: '',
    name: '',
    surname: '',
    email: '',
    tel: '',
  };
  id: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  tel: string = '';

  constructor(private clients: ClientsService) {}
  getAllClients() {
    this.clients.getAllClients().subscribe((res) => {
      this.clientList = res.map((e: any) => {
        const clients = e.payload.doc.data();
        clients.id = e.payload.doc.id;
        return clients;
      });
    });
  }
}
