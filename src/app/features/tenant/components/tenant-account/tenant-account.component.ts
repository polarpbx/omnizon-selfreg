import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TenantService } from '@features/tenant/services/tenant.service';
import { TranslateService } from '@ngx-translate/core';

//import { PasswordMatchValidator } from '@features/tenant/directives/password-match.directive';

@Component({
  selector: 'app-tenant-account',
  templateUrl: './tenant-account.component.html',
  styleUrls: ['./tenant-account.component.scss'],
})
export class TenantAccountComponent implements OnInit {
  tenantForm: FormGroup = new FormGroup({
    language: new FormControl(this.getBrowserLanguage()),
    organization: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      //PasswordMatchValidator(/test/i),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl('', [Validators.required]),
    confirmConditions: new FormControl(false, Validators.requiredTrue),
    recaptcha: new FormControl('', Validators.required),
  });

  siteKey: string = '6LcqsHsgAAAAAJjK615vZsBgFVqg05X98FsZqHBX';

  constructor(
    private tenantService: TenantService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  ngOnInit(): void {
    console.log(this.getBrowserLanguage());
  }
  onSubmit() {

  }
  getBrowserLanguage() {
    return localStorage.getItem("lang")!=null?localStorage.getItem("lang"):window.navigator.language == 'en-US'?'en':window.navigator.language;
  }
  onChangeLanguage() {
    localStorage.setItem('lang',this.tenantForm.value.language);
    this.translateService.use(localStorage.getItem('lang')||this.tenantForm.value.language);
  }
}
