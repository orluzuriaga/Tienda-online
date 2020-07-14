import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    saleprice: new FormControl(''),
    thumbImage: new FormControl(''),
  })
  constructor(private service:ProductsService, private router:Router, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }


  //Enviamos nuestro objeto al servidor
  submit(){
    if(this.form.valid){
      let product = this.form.value;
      console.log(`Going to save ${product}`)
      this.service.add(product).subscribe( result => {
        console.log('El producto ha sido añadido')
        this.router.navigate([''])
        this.snackBar.open('Producto añadido con exito','Close', {
          duration:3000
        } );
      })
    }else{
      console.error('Error al añadir el produto')
    }
  }


  cancel(){
     this.router.navigate([''])
  }

}
