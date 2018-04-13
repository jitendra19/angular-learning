import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainLayoutComponent } from './app-main-layout.component';

describe('AppMainLayoutComponent', () => {
  let component: AppMainLayoutComponent;
  let fixture: ComponentFixture<AppMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
