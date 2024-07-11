import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculSommeComponent } from './calcul-somme.component';

describe('CalculSommeComponent', () => {
  let component: CalculSommeComponent;
  let fixture: ComponentFixture<CalculSommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculSommeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculSommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
