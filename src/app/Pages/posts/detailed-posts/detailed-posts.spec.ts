import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPosts } from './detailed-posts';

describe('DetailedPosts', () => {
  let component: DetailedPosts;
  let fixture: ComponentFixture<DetailedPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
