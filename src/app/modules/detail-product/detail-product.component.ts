import { Component, OnInit } from '@angular/core';
import product from 'src/app/models/products';
import { DetailsService } from 'src/app/services/details.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  loading:boolean;
  id:number= 0;
  detail:product={
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
  };


  constructor(private route: ActivatedRoute,private detailService:DetailsService)  {
    this.route.params.subscribe((params) => {
      this.getDetail(params['id'])
    });
    this.loading= true
  }

  ngOnInit(): void {

  }

  getDetail(id:number):void{
    this.detailService.getDetail(id).subscribe(p=>
      {
        this.detail.category = p.category;
        this.detail.description= p.description;
        this.detail.id= p.id;
        this.detail.image= p.image;
        this.detail.price= p.price;
        this.detail.title = p.title;

        if(!p){
          alert('Error en el servido Fake Api')
        }else{
          this.loading= false
        }
      })
  }
}
