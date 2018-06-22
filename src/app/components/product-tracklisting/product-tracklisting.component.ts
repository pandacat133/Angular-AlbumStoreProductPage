import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Album } from '../../interfaces/album';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1)
      .subscribe(response => this.albumInfo = response)
  }
}
