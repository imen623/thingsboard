import { Component } from "@angular/core";
import { AuthService } from "../../@services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  username = "";
  password = "";
  error = "";

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(["/pages"]),
      error: () => (this.error = "Login failed. Check your credentials."),
    });
  }
}
