import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorTableComponent } from './translator-table.component';

describe('TranslatorTableComponent', () => {
  let component: TranslatorTableComponent;
  let fixture: ComponentFixture<TranslatorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
