import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,

    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [PagesComponent, LoginComponent],
})
export class PagesModule {}
