import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../common/services/settings.service";
import {TranslationService} from "../common/services/translation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages = [
    {key: "en", value: "Eng"},
    {key: "arm", value: "Հայ"},
    {key: "ru", value: "Рус"},
  ];

  constructor(
    public settingsService: SettingsService,
    public translationService: TranslationService
  ) {
  }

  ngOnInit(): void {
    this.translationService.setLanguage(this.settingsService.language)
  }

  public onSelectLgn(lng: string) {
    this.translationService.setLanguage(lng);
    console.log(lng)
  }


}
