import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestBed } from 'src/test/test-bed';
import { setupTests } from 'src/test/test-setup';
import { WelcomeOverviewComponent } from './welcome-overview.component';

describe('WelcomeOverviewComponent', () => {
  let component: WelcomeOverviewComponent;
  let fixture: ComponentFixture<WelcomeOverviewComponent>;

  setupTests(async () => AppTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeOverviewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
