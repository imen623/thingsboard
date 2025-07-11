import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {
  NbAuthComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from "@nebular/auth";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "pages",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },

  {
    path: "register",
    component: NbRegisterComponent,
  },
  {
    path: "logout",
    component: NbLogoutComponent,
  },
  {
    path: "request-password",
    component: NbRequestPasswordComponent,
  },
  {
    path: "reset-password",
    component: NbResetPasswordComponent,
  },

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "pages" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
