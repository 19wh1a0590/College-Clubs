import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEnglishComponent } from './comment-english.component';

describe('CommentEnglishComponent', () => {
  let component: CommentEnglishComponent;
  let fixture: ComponentFixture<CommentEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
