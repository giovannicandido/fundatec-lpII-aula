import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindStylesPageComponent } from './databind-styles-page.component';

describe('DatabindStylesPageComponent', () => {
  let component: DatabindStylesPageComponent;
  let fixture: ComponentFixture<DatabindStylesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabindStylesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatabindStylesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
