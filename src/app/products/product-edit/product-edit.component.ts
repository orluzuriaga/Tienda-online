import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'ed-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {


  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    salePrice: new FormControl(''),
    thumbImage: new FormControl(''),
  })

  id:String

  constructor(private router:Router,
      private activatedRouter: ActivatedRoute,
      private service:ProductsService,
      private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    //Capturamo la ruta de nuestro elemento a editar, snapshot representa la ruta
    this.id = this.activatedRouter.snapshot.paramMap.get('id');

    //Llamo al servicio para obtener el objeto correspondiente al id
    this.service.getProduct(this.id)
    .subscribe(producto =>{
      console.log(producto);
      this.form.patchValue(producto)

    });


  }


  submit(){
    //Comprobamos si el producto es valido
    if(this.form.valid){
      let product = this.form.value;
      product.id = this.id;

      this.service.update(product)
      .subscribe(result =>{
        console.log(`Datos enviados correctamente ${product.id}  y con resultado ${result}`)
        this.router.navigate(['/productos']);
        this.snackBar.open('Producto actualizado correctamente', 'Close', {
          duration:3000
        })
      })
    }

  }

  cancel(){
     this.router.navigate([''])
  }

}
