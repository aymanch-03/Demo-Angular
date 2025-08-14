import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="home">
      <h2>Welcome</h2>
      <p>Use the navigation to browse the app.</p>
    </section>
  `,
  styles: [
    `
      .home { max-width: 800px; margin: 2rem auto; padding: 1rem; color: var(--text); }
    `
  ]
})
export class Home {}


