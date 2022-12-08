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

  BASEURL:any= "https://shopeame-backend-wine.vercel.app/products";


  // constructor(private http: HttpClient) {   }


  // getProducts():Observable<any>{
  //     return this.http.get(baseUrl)
  // }

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.BASEURL)
  }

  getProductByid(id:number){

    return this.http.get(this.BASEURL + "/"+id)
  }

  addProduct(product:any){
   this.http.post(this.BASEURL,product).subscribe()

  }
  delete(id:number){
    return this.http.delete(this.BASEURL + '/' + id)
  }

  putProduct(nuevoProducto:any){
    return this.http.put(this.BASEURL + '/' + nuevoProducto.id,nuevoProducto)
  }

}
