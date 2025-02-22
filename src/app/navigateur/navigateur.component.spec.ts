import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateurComponent } from './navigateur.component';

describe('NavigateurComponent', () => {
  let component: NavigateurComponent;
  let fixture: ComponentFixture<NavigateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigateurComponent]
    });
    fixture = TestBed.createComponent(NavigateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
