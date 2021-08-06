import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertNewsComponent } from './filtert-news.component';

describe('FiltertNewsComponent', () => {
  let component: FiltertNewsComponent;
  let fixture: ComponentFixture<FiltertNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltertNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltertNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
