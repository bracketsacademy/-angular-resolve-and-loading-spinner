import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private route: ActivatedRoute) {
    this.products = this.route.snapshot.data['products'];
  }

  ngOnInit(): void {

  }


}
