import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPublicationsComponent } from './switch-publications.component';

describe('SwitchPublicationsComponent', () => {
  let component: SwitchPublicationsComponent;
  let fixture: ComponentFixture<SwitchPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
