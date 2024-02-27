import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Thor", "Dare Devil", "Deadpool", "Iron Man"]
  public deletedHero?: string | undefined

  removeLastHero = (): void => {
    this.deletedHero = this.heroNames.pop()
  }


}
