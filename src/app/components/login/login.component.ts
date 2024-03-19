import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  users: any;

  constructor(private _logInservice: LoginService) {}

  ngOnInit(): void {

  }

  getUsers(): void {
    this._logInservice.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
        console.log(this.users)
      }, error: (error: any) => {
        console.log(error)
      }
    })
  }
}
