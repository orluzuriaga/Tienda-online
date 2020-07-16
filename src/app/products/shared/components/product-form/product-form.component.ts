import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'ed-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    saleprice: new FormControl(''),
    thumbImage: new FormControl(''),
  })

  @Input()title:string
  @Input() labelSubmit:string
  @Input() set model(m:Product){
    if(!m){
      return;
    }

    console.log("set model", m)
    this.form.patchValue(m)
  }

  @Output()submit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output()cancel: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      this.submit.emit(this.form.value
        )
    }else{
      console.error('form is ivalid')
    }
  }


  onCancel(){
    this.cancel.emit()
  }

}
