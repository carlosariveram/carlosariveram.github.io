import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyStackBlockComponent } from './technology-stack-block.component';

describe('TechnologyStackBlockComponent', () => {
  let component: TechnologyStackBlockComponent;
  let fixture: ComponentFixture<TechnologyStackBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyStackBlockComponent]
    });
    fixture = TestBed.createComponent(TechnologyStackBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
