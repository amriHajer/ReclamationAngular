import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsutlationComponent } from './consutlation.component';

describe('ConsutlationComponent', () => {
  let component: ConsutlationComponent;
  let fixture: ComponentFixture<ConsutlationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsutlationComponent]
    });
    fixture = TestBed.createComponent(ConsutlationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
