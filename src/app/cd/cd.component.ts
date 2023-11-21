import { Component, Input } from '@angular/core';
import { CD } from '../model/cd.model';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {

  @Input() Cd!: CD;

  onAddCD() {
      this.Cd.quantite += 1;
  }
}

