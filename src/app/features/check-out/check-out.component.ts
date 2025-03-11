import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/navbar/navbar.component";
import { FooterComponent } from "../../core/footer/footer.component";
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-check-out',
  imports: [NavbarComponent, FooterComponent,ButtonComponent],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

}
