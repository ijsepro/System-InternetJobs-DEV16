import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDnavbarComponent } from './cdnavbar.component';

describe('CDnavbarComponent', () => {
  let component: CDnavbarComponent;
  let fixture: ComponentFixture<CDnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
