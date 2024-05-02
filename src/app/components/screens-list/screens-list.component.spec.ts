import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensListComponent } from './screens-list.component';

describe('ScreensListComponent', () => {
  let component: ScreensListComponent;
  let fixture: ComponentFixture<ScreensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreensListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
