import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public setLanguage = new Subject();
  public language: string = JSON.parse(localStorage.getItem('lng')) || 'en';

  constructor() {
  }
}
