import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';
import { Product } from '../../interfaces/product';
@Injectable({
  providedIn: 'root'
})

export class ProductsResolverService implements Resolve<Product[]> {

  constructor(private product: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Product[]> | Observable<Product[]> | Product[] {
    return this.product.getProducts();
  }
}
