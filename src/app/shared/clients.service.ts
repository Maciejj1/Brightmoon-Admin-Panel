import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from '../clients/Clients/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private ans: AngularFirestore) {}
  //add client
  addClient(client: Client) {
    client.id = this.ans.createId();
    return this.ans.collection('/BrightMoonClients').add(client);
  }
  // get all clients
  getAllClients() {
    return this.ans.collection('/BrightMoonClients').snapshotChanges();
  }
  // remove clients
  removeClient(client: Client) {
    return this.ans.doc('/BrightMoonClients/' + client.id).delete();
  }

  //update Client
  updateClitent(client: Client) {
    this.removeClient(client);
    this.addClient(client);
  }
}
