import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCulturalComponent } from './comment-cultural.component';

describe('CommentCulturalComponent', () => {
  let component: CommentCulturalComponent;
  let fixture: ComponentFixture<CommentCulturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentCulturalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
