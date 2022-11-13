import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  @Input() product: any = {
    img: '',
    name: '',
    price: '',
    description: '',

  }


  // constructor(private http: HttpClient) {   }


  // getProducts():Observable<any>{
  //     return this.http.get(baseUrl)
  // }

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products")
  }

  getProductByid(id:number){

    return this.http.get("http://localhost:3000/products/"+id)
  }

  addProduct(product:any){
   this.http.post("http://localhost:3000/products",product).subscribe()

  }
  delete(id:number){
    return this.http.delete("http://localhost:3000/products" + '/' + id)
  }

  putProduct(nuevoProducto:any){
    return this.http.put("http://localhost:3000/products" + '/' + nuevoProducto.id,nuevoProducto)
  }

}
