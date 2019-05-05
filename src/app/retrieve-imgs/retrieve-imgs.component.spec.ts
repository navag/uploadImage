import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveImgsComponent } from './retrieve-imgs.component';

describe('RetrieveImgsComponent', () => {
  let component: RetrieveImgsComponent;
  let fixture: ComponentFixture<RetrieveImgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveImgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
