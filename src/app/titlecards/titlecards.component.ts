import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titlecards',
  templateUrl: './titlecards.component.html',
  styleUrls: ['./titlecards.component.css']
})
export class TitlecardsComponent {
  @Input()
  price!: number;


}
