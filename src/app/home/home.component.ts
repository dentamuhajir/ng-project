import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private titleService: Title) {
    titleService.setTitle("Homepage");
  }



}
