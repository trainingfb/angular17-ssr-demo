import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <button routerLink="demo1">demo1</button>
    <button routerLink="demo2">demo2</button>
    <button routerLink="demo3">demo3</button>
    <button routerLink="demo4">demo4</button>
    <button routerLink="demo5">demo5</button>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {

}
