import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { AnotherComponent } from './another/another.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      AnotherComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
