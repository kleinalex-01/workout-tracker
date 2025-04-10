import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth: AuthService) { }
  isSignedIn: boolean = false;
  isLoading: boolean = false;

  async signInWithGoogle() {
    if (this.isLoading) {
      return;
    }
    if (this.isSignedIn) {
      return;
    }

    this.isLoading = true;
    const user = await this.auth.signInWithGoogle();
    this.isSignedIn = !!user;

    this.isLoading = false;
  }
}
