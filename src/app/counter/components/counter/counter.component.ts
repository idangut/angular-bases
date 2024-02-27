import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseCounter(1)">+1</button>
    <button (click)="resetCounter()" style="margin-left: 1rem;">Reset</button>
    <button (click)="decreaseCounter(2)" style="margin-left: 1rem;">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10

  increaseCounter(value: number): void {
    this.counter += value
  }

  decreaseCounter(value: number): void {
    this.counter -= value
  }

  resetCounter(): void {
    this.counter = 10
  }
}
