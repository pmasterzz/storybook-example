import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pep-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public label?: string;
}
