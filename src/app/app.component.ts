import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'This is my app!!!';

  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
  ngOnInit() {
    // this.exPromise();
  }

  // exPromise = async () =>  {
  //     // this.rq1()
  //     // .then(() => console.log('rq1 success'))
  //     // .then(() => Promise.all([this.rq2(),this.rq3()]).then(() => console.log('rq 2,3 success'))
  //     // )
  //     // .then(() => this.rq4().then(() => console.log('rq4 success')));
  //     const a = await this.rq1();
  //     console.log('a', a);
  //     const b = a.map(item => {
  //       return this.rq2(item);
  //     });
  //     const results = await Promise.all(b);
  //     console.log('done', results);
  // }

  // rq1(): Promise<number[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const n = Math.round(Math.random() * 10);
  //       const ids: number[] = [];
  //       for (let i = 0; i <= n; i++) {
  //         ids.push(Math.round(Math.random() * 10));
  //       }
  //       // for (const item of ids) {
  //       //   console.log(item);
  //       // }
  //       // console.log(Array(5).map(e => (Math.round(Math.random() * 10))));
  //       resolve(ids);
  //     }, 1000);
  //   });
  // }

  // rq2(id): Promise<string> {
  //   const second = Math.round(Math.random() * 5);
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('rq2', id + '(^_^)');
  //       resolve(id + '(^_^)');
  //     }, second * 1000);
  //   });
  // }

}
