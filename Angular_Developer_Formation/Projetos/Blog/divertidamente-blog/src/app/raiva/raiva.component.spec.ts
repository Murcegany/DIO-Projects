import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaivaComponent } from './raiva.component';

describe('RaivaComponent', () => {
  let component: RaivaComponent;
  let fixture: ComponentFixture<RaivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
