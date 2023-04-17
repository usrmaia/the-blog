import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsFullComponent } from './card-news-full.component';

describe('CardNewsFullComponent', () => {
  let component: CardNewsFullComponent;
  let fixture: ComponentFixture<CardNewsFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewsFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
