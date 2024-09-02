import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-custom-expansion-panel",
  templateUrl: "./custom-expansion-panel.component.html",
  imports: [MaterialModule, NgStyle, NgClass],
  styleUrls: ["./custom-expansion-panel.component.scss"],
  standalone: true,
})
export class CustomExpansionPanelComponent implements OnChanges {
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
