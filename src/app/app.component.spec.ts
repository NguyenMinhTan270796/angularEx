import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

function Calculator() {
  this.add = function(a: any, b: any) { return a + b; };
  this.minus = function(a: any, b: any) { return a - b; };
  this.multiply = function(a: any, b: any) { return a * b; };
  this.divide = function(a: any, b: any) {return a / b; };
}

fdescribe('AppComponent', () => {
  const cal = new Calculator();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    console.log('object');
  }));
  console.log('object2');
  fit('1 plus 1', () => {
    expect(2).toBe(cal.add(1, 1));
  });

  fit('1 minus 1', () => {
    expect(0).toBe(cal.minus(1, 1));
  });

  fit('add two whole number', () => {
    expect(cal.add(2, 2)).toEqual(4);
  });

  fit('minus two whole number', () => {
    expect(cal.minus(2, 2)).toEqual(0);
  });
  console.log('object3');

  fit('divide two whole number', () => {
    expect(cal.divide(4, 2)).toEqual(2);
  });

  fit('multiply two whole number', () => {
    expect(4).toBe(cal.multiply(2, 2));
  });

  fit('multiply two whole number use to Equal,', () => {
    expect(cal.multiply(4, 4)).toEqual(16);
  });


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
