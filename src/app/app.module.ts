import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchPipe} from "./common/pipes/search.pipe";
import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {DropDownComponent} from './common/drop-down/drop-down/drop-down.component';
import {SelectDropDownComponent} from './common/drop-down/select-drop-down/select-drop-down.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownComponent,
    SearchPipe,
    SelectDropDownComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
