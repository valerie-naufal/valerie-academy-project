import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports:[CommonModule]
})
export class ButtonComponent {
  @Input() size: "L" | "S" | "M" = "S";
  @Input() btnText: string ='';
}
