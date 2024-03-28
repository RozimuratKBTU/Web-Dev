import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponentComponent } from './album-component.component';

describe('AlbumComponentComponent', () => {
  let component: AlbumComponentComponent;
  let fixture: ComponentFixture<AlbumComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
