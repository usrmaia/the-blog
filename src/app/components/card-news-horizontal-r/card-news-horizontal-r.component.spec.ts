import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsHorizontalRComponent } from './card-news-horizontal-r.component';

describe('CardNewsHorizontalRComponent', () => {
  let component: CardNewsHorizontalRComponent;
  let fixture: ComponentFixture<CardNewsHorizontalRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewsHorizontalRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsHorizontalRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
