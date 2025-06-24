import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImageFormComponent } from './edit-image-form.component';

describe('EditImageFormComponent', () => {
  let component: EditImageFormComponent;
  let fixture: ComponentFixture<EditImageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditImageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
