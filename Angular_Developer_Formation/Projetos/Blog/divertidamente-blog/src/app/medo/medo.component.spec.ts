import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedoComponent } from './medo.component';

describe('MedoComponent', () => {
  let component: MedoComponent;
  let fixture: ComponentFixture<MedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
