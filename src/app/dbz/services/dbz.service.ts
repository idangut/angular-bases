import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from "uuid"

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: "Gohan",
      power: 10000
    },
    {
      id: uuidv4(),
      name: "Goku",
      power: 50000
    },
    {
      id: uuidv4(),
      name: "Krilin",
      power: 500
    },
    {
      id: uuidv4(),
      name: "Vegeta",
      power: 75000
    }
  ]

  addCharacter = (character: Character): void => {

    const newCharacter: Character = {
      id: uuidv4(),
      ...character
    }

    this.characters.push(newCharacter)
  }

  // onDeleteCharacter = (index: number): void => {
  //   this.characters.splice(index, 1)
  // }

  deleteCharacterById = (id: string): void => {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
