import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterListPageComponent } from './router-list-page.component';

describe('RouterListPageComponent', () => {
  let component: RouterListPageComponent;
  let fixture: ComponentFixture<RouterListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
