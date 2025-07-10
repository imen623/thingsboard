import { Component } from "@angular/core";
import { AuthService } from "../../@services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  username = "";
  password = "";
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.errorMessage = "";
        this.router.navigate(["/pages"]); // or your dashboard route
      },
      error: (err) => {
        this.errorMessage = "Login failed. Please check your credentials.";
      },
    });
  }
}
