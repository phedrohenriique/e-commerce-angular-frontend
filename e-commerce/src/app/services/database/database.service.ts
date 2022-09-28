import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  dataList: Array<{ id: string, product_name: string, price_un: number, qty: number }> = [
    {
      id: "01",
      product_name: "product_1",
      price_un: 200,
      qty: 10
    },
    {
      id: "02",
      product_name: "product_2",
      price_un: 500,
      qty: 5
    }
  ]

  constructor(private http: HttpClientModule) {

  }

  databaseProducts() {
    return this.dataList
  }

}
