import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExpansionPanel4Component } from './custom-expansion-panel-4.component';

describe('CustomExpansionPanel4Component', () => {
  let component: CustomExpansionPanel4Component;
  let fixture: ComponentFixture<CustomExpansionPanel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomExpansionPanel4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomExpansionPanel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
