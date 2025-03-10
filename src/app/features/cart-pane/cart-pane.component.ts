import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-pane',
  imports: [],
  templateUrl: './cart-pane.component.html',
  styleUrl: './cart-pane.component.scss'
})
export class CartPaneComponent {
  @Input() closePane!: () => void;
}
