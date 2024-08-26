import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NojinhoComponent } from './nojinho.component';

describe('NojinhoComponent', () => {
  let component: NojinhoComponent;
  let fixture: ComponentFixture<NojinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NojinhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NojinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
