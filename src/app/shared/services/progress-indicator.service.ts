import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {


  enProgreso = new Subject<boolean>()
  constructor() { }

  show(){

  this.enProgreso.next(true)
  }

  hide(){
   this.enProgreso.next(false)
  }
}
