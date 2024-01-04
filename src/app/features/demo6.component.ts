import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-demo6',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <p>Prerendered Component</p>
    <pre>{{ list() | json }}</pre>
  `,
  styles: ``,
})
export default class Demo6Component {
  list = signal<any[]>(Array.from({ length: 100 }, (_, i) => i + 1));
}
