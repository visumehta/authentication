import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = []
  constructor(private _httpService: HttpService) {
    this._httpService.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    })
  }
}
