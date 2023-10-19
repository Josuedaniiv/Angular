import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name: string = 'Sylas';
public age: number = 45;

get capitalizedName(): string {
  return this.name.toUpperCase();
}

public getHeroDescription(): string {
return `${ this.name } - ${ this.age }`;
}

changeHero(): void {
  this.name = 'Cypress';
}

changeAge(): void {
  this.age = 30;
}

resetForm(): void {
  this.name = 'Sylas';
  this.age = 45;
}

}
