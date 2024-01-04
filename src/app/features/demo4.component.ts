import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { WindowService } from '../core/window.service';

// DOC
// https://github.com/angular/universal/blob/main/docs/gotchas.md

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <h1>Demo 4: injection</h1>
    <pre>Use injection and DOCUMENT</pre>
    
    <pre>{{width() | json}}</pre>
  `,
})
export default class Demo4Component {
  windowService = inject(WindowService)
  width = signal<number | undefined>(0)

  constructor() {
    console.log('demo4', this.windowService.getWidth())
    this.width.set(this.windowService.getWidth())
  }
}
