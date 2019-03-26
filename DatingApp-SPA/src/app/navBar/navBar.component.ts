import { AuthService } from "./../_services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navBar",
  templateUrl: "./navBar.component.html",
  styleUrls: ["./navBar.component.css"]
})
export class NavBarComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Logged in successfully");
      },
      error => {
        console.log("Error");
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logout() {
    localStorage.removeItem("token");
    console.log("logged out");
  }
}
