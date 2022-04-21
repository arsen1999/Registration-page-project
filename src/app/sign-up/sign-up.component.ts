import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {REGION} from "../common/constants/region";
import {CITY} from "../common/constants/city";
import {SCHOOL} from "../common/constants/school";
import {GRADE} from "../common/constants/grade";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public region: string[] = REGION;
  public city: string[] = CITY;
  public school: string[] = SCHOOL;
  public grade: string[] = GRADE;

  public isSubmitted = false;
  public isModal = false;

  @ViewChild('password') password;
  @ViewChild('confirmPassword') confirmPassword;

  public SignUpForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  public showPassword() {
    if (this.password.nativeElement.type === 'password') {
      this.password.nativeElement.setAttribute('type', 'text');
    } else {
      this.password.nativeElement.type = 'password';
    }
  }

  public showConfirmPassword() {
    if (this.confirmPassword.nativeElement.type === 'password') {
      this.confirmPassword.nativeElement.setAttribute('type', 'text');
    } else {
      this.confirmPassword.nativeElement.type = 'password';
    }
  }

  public onSubmit() {
    this.isSubmitted = true;
    this.isModal = true;
  }

  public closeModal() {
    this.isModal = false;
  }

}
