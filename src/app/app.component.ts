import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { DestinationsComponent } from "./destinations/destinations.component";
import { ExperienceComponent } from "./experience/experience.component";
import { OffersComponent } from "./offers/offers.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, DestinationsComponent, ExperienceComponent, OffersComponent, FooterComponent]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'first-project';
}
