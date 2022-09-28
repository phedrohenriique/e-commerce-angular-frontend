import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  constructor(private service: DatabaseService) {

  }

  ngOnInit(): void {
    // console.log(this.service.databaseProducts())
  }

  products() {
    return this.service.databaseProducts()
  }

}
