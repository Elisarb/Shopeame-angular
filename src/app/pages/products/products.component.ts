// import { Component, OnInit } from '@angular/core';
// import { ProductsService } from 'src/app/shared/services/products.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss']
// })
// export class ProductsComponent implements OnInit {
//   products:any = [];

//   selectedProduct!: Product;


//   constructor(private productsService:ProductsService) {
//     this.productsService.getProducts().subscribe(
//       (res:any) =>{
//         console.log(res);
//         this.products = res;
//       }
//     )

//    }







//   ngOnInit(): void {
//   }



// }

// interface Product {
//   name: string,
// }

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router } from '@angular/router';
import { product } from './../../models/models';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {


  products:any = [];
  selectedProduct!: product;

  constructor(private productsService: ProductsService, private router: Router) { }

  edit(id: number){
    this.productsService.getProductByid(id).subscribe((res: any) => {
      this.productsService.product = res;
      this.router.navigate(['/edit']);
    });
  }

  delete(id: number) {
    this.productsService.delete(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res;
      console.log(res)
    })

  }

}
