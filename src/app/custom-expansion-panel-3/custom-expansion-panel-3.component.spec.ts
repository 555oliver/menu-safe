import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExpansionPanel3Component } from './custom-expansion-panel-3.component';

describe('CustomExpansionPanel3Component', () => {
  let component: CustomExpansionPanel3Component;
  let fixture: ComponentFixture<CustomExpansionPanel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomExpansionPanel3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomExpansionPanel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
