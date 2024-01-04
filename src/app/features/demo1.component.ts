import { HttpClient } from '@angular/common/http';
import { afterNextRender, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  template: `
    <h1>Demo HttpClient</h1>
    
    <pre>This content is server side rendered</pre>
    
    @for(user of users(); track user.id) {
      <li>{{user.name}}</li>
    }
    
    <h1>user name {{user()?.name}}</h1>
  `,
  styles: ``
})
export default class Demo1Component {
  http = inject(HttpClient)
  users = signal<any[]>([])
  user = signal<any>(null)

  constructor() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.users.set(res)
      })

    this.http.get<any>('https://jsonplaceholder.typicode.com/users/1')
      .subscribe(res => {
        this.user.set(res)
      })
  }
}
