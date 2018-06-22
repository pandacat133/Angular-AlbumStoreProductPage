import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductService } from './services/product.service';
import { ProductTracklistingComponent } from './components/product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
