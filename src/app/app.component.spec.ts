import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should create the app', async() => {
    await render(AppComponent);
    const title = screen.getByText('Hello, boilerplate-angular');
    expect(title).toBeTruthy();
  })
});
