import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySuggestionComponent } from './activity-suggestion.component';

describe('ActivitySuggestionComponent', () => {
  let component: ActivitySuggestionComponent;
  let fixture: ComponentFixture<ActivitySuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitySuggestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitySuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
