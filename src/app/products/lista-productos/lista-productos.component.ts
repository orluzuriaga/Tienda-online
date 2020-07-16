import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  products:Product[]
  constructor(private service:ProductsService,
              private snackBar:MatSnackBar,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(datos => {
      console.log(`Estos son los datos que vienen del servido ${datos}`)
      this.products = datos;
    })
  }

  delete(product:Product){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
      maxWidth:'600px',
      data:{
        title:'Delete product',
        message:'Are you sure to delete this product'
      }
    })

    dialogRef.afterClosed().subscribe(result =>
      {
        if(result){
          this.deleteProduct(product)
        }
      })

  }


  private deleteProduct(product:Product){
    this.service.delete(product.id)
    .subscribe(respuesta =>{
      console.log(`Producto borrado correctamente ${respuesta}`)
      this.loadProducts()
      this.snackBar.open('Producto se ha borrado correctamente', 'Close',{
        duration:3000
      })
    })
  }


  private loadProducts(){
    this.service.getAll()
    .subscribe(result => this.products = result)
  }

}
