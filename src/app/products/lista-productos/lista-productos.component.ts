import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  products:Product[]
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(datos => {
      console.log(`Estos son los datos que vienen del servido ${datos}`)
      this.products = datos;
    })
  }

}
