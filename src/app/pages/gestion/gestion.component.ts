import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  ProductRegisterForm! : FormGroup;
  isSubmit : boolean = false;
  id:string = "";



  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router:Router) { }

  newProduct!:any;

  ngOnInit(): void {
    this.id = this.productsService.product.id;
    this.ProductRegisterForm = this.formBuilder.group({
      name: [this.productsService.product.name, [Validators.required]],
      price: [this.productsService.product.price, [Validators.required, Validators.pattern(/[0-9]/)]],
      description: [this.productsService.product.description, [Validators.required]],
      stars: [this.productsService.product.stars, [Validators.required, Validators.pattern(/^[0-5]$/)]],
      image: [this.productsService.product.image, [Validators.required]],
    })

  }



  submit() {


        this.newProduct = this.ProductRegisterForm.value
        console.log(this.newProduct)

        this.productsService.addProduct(this.newProduct)

        console.log("ok")
        this.ProductRegisterForm.reset()

        this.router.navigate(['/products'])

      }
  }

