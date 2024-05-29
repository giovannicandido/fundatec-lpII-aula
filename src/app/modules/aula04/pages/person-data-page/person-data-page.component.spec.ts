import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataPageComponent } from './person-data-page.component';

describe('PersonDataPageComponent', () => {
  let component: PersonDataPageComponent;
  let fixture: ComponentFixture<PersonDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDataPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
