import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoDoisComponent } from './promocao-dois.component';

describe('PromocaoDoisComponent', () => {
  let component: PromocaoDoisComponent;
  let fixture: ComponentFixture<PromocaoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocaoDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
