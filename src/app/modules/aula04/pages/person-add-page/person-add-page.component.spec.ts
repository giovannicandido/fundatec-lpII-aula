import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAddPageComponent } from './person-add-page.component';

describe('PersonAddPageComponent', () => {
  let component: PersonAddPageComponent;
  let fixture: ComponentFixture<PersonAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonAddPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
