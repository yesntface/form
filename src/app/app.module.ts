import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {QuillModule} from 'ngx-quill';
import {ReactiveFormsModule} from '@angular/forms';
import { VacancyFormComponent } from './vacancy-form/vacancy-form.component';


@NgModule({
  declarations: [
    AppComponent,
    VacancyFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
