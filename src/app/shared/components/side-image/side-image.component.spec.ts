import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImageComponent } from './side-image.component';

describe('SideImageComponent', () => {
  let component: SideImageComponent;
  let fixture: ComponentFixture<SideImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
