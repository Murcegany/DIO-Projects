import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlegriaComponent } from './alegria.component';

describe('AlegriaComponent', () => {
  let component: AlegriaComponent;
  let fixture: ComponentFixture<AlegriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlegriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlegriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
