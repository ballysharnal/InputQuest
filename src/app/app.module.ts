import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './component/developer/developer.component';
import { SkillComponent } from './component/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
