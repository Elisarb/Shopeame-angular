import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() products:any;

  constructor() { }

  ngOnInit(): void {
  }

  countStars(prod:any){
    let stars:any = [];


    for(let index=0; index < prod.stars; index++){
      if (prod.stars>= 1){
        stars.push("star")
      }
    }

    return stars;

  }

  countNoStars (prod:any){
    let noStars:any = [];
    let stars = this.countStars(prod);

    if (stars.length < 5){
      let q = 5 - stars.length;
      for(let index=0; index < q; index++){
        if (q>= 1){
          noStars.push("no star")
        }
      }
    }

    return noStars;
  }

}
