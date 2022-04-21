import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SettingsService} from "./settings.service";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
    private translate: TranslateService,
    private settingsService: SettingsService
  ) {
     this.translate.use(this.settingsService.language)
  }

  public setLanguage(lgn: string): void {
     this.translate.use(lgn || this.settingsService.language);
    this.settingsService.language = lgn;
     localStorage.setItem('lgn', JSON.stringify(this.settingsService.language));
  }
}
