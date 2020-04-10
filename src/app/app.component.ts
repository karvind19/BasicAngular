import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { browser } from 'protractor';
import { Auth } from 'aws-amplify';
import { Constants } from './shared/utils/constants';

/**
 * Root Component for User maintenance UI.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  /** To specify default language in which the form will appear. */
  private _defaultLang: string;

  /**
   * Accessor for the defaultLang property
   * @return Current value of the language property.
   */
  public get defaultLang(): string {
    return this._defaultLang;
  }

  /**
   * Mutator for the defaultLang property
   * @param language New value of the language property.
   */
  public set defaultLang(value: string) {
    this._defaultLang = value;
  }

  /** Supported application languages. */
  lang: string[] = Constants.SUPPORTED_LANGUAGES;

  /**
   * Loads immediately when the application is loaded and checks for current authenticated user.
   */
  ngOnInit() {  }

  /**
   * Constructor with injected service.
   * @param TranslateService Service that translates messages to other languages.
   */
  constructor(public translate: TranslateService) {
    this.defaultLang = Constants.DEFAULT_LANGUAGE;
    translate.addLangs(this.lang)
    translate.setDefaultLang(this.defaultLang);
  }
}
