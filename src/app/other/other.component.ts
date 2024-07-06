import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  constructor(private titleService: Title) {
    titleService.setTitle("Other Page")
  }

}
