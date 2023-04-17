import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsSummaryComponent } from './card-news-summary.component';

describe('CardNewsSummaryComponent', () => {
  let component: CardNewsSummaryComponent;
  let fixture: ComponentFixture<CardNewsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
