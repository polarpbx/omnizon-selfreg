import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor() { }

  status(){
    console.log("Tenan Service - activated");
  }
}
