import { ChangeDetectionStrategy, Component, viewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatAccordion} from '@angular/material/expansion';
import { CustomExpansionPanelComponent } from './custom-expansion-panel/custom-expansion-panel.component';
import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { Option4Component } from './option4/option4.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, Option1Component, Option2Component , Option3Component, Option4Component],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'menu';

}
