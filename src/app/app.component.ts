import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { HeroComponent } from "./Component/hero/hero.component";
import { Main1Component } from "./Component/main1/main1.component";
import { Main2Component } from "./Component/main2/main2.component";
import { ContectComponent } from "./Component/contect/contect.component";
import { FooterComponent } from "./Component/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, Main1Component, Main2Component, ContectComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nice_deal';
}
