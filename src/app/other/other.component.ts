import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  constructor(private titleService: Title) {
    titleService.setTitle("Other Page")
  }

}
