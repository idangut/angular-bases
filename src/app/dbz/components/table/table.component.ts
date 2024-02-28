import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-table',
  templateUrl: "table.component.html",
  styleUrl: './table.component.css',
})
export class TableComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter = (id?: string): void => {
    if (!id) return
    this.onDelete.emit(id)
  }
}
