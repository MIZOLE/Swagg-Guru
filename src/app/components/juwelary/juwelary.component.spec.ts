import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuwelaryComponent } from './juwelary.component';

describe('JuwelaryComponent', () => {
  let component: JuwelaryComponent;
  let fixture: ComponentFixture<JuwelaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuwelaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuwelaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
