import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-custom-expansion-panel-2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './custom-expansion-panel-2.component.html',
  styleUrl: './custom-expansion-panel-2.component.scss'
})
export class CustomExpansionPanel2Component {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() theme?: "primary" | "critical";
  @Input() isModule = false;
  @Input() isSubModule = false;
  @Input() optionNumber = 0;
  @Input() color = '';


  panelOpenState?: boolean;

  constructor(private host: ElementRef<any>) {}

  ngOnChanges(changes: SimpleChanges) {
    if ("theme" in changes) {
      this.color = this.theme === "primary" ? "#000011" : "#110000";
      this.host.nativeElement.style.setProperty(`--color`, this.color);
    }
  }

}
