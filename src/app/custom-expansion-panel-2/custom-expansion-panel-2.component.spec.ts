import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExpansionPanel2Component } from './custom-expansion-panel-2.component';

describe('CustomExpansionPanel2Component', () => {
  let component: CustomExpansionPanel2Component;
  let fixture: ComponentFixture<CustomExpansionPanel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomExpansionPanel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomExpansionPanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
