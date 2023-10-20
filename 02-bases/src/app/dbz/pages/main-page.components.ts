import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponents {

  public characters: Character[] = [{
    name: 'Krilli',
    power: 1000
  },{
    name: 'Goku',
    power: 900
},{
  name: 'Piccolo',
  power: 9000
}];

onNewCharacter( character: Character ): void {
  console.log('MainPage');
  console.log(character);

}

}
