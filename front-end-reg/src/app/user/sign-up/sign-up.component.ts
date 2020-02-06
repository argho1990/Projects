import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  showSuccessMessage: boolean;
  serverErrorMessage: string;


  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    console.log('UI Data: ', form.value);
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000)
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {

          console.log('Error ', err);

          this.serverErrorMessage = err.error;


        }
        else {
          this.serverErrorMessage = 'Something went wrong';
        }
      }
    );

  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

}
