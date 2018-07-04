import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChooseComponent } from './card-choose.component';

describe('CardChooseComponent', () => {
  let component: CardChooseComponent;
  let fixture: ComponentFixture<CardChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
