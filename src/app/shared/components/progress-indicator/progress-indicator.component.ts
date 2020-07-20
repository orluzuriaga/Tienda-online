import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressIndicatorService } from '../../services/progress-indicator.service';

@Component({
  selector: 'ed-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css']
})
export class ProgressIndicatorComponent implements OnInit {


  enProgreso:Subject<boolean> = this.service.enProgreso;

  constructor(private service:ProgressIndicatorService) { }

  ngOnInit(): void {
  }

}
