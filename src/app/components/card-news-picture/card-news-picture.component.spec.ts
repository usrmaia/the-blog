import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsPictureComponent } from './card-news-picture.component';

describe('CardNewsPictureComponent', () => {
  let component: CardNewsPictureComponent;
  let fixture: ComponentFixture<CardNewsPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewsPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewsPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
