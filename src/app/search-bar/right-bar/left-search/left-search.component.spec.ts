import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSearchComponent } from './left-search.component';

describe('LeftSearchComponent', () => {
  let component: LeftSearchComponent;
  let fixture: ComponentFixture<LeftSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
