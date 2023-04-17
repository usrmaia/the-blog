import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsVerticalRComponent } from './card-news-vertical-r.component';

describe('CardNewsVerticalRComponent', () => {
  let component: CardNewsVerticalRComponent;
  let fixture: ComponentFixture<CardNewsVerticalRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewsVerticalRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsVerticalRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
