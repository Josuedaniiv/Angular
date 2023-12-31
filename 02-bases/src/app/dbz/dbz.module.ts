import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponents } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';




@NgModule({
  declarations: [
    MainPageComponents,
    ListComponent,
    CharacterComponent
  ],
  exports: [
    MainPageComponents
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
