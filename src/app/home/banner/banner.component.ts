import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Output() dataChanged = new EventEmitter<string>()
  updateData() {
    const newData = "data change from child";
    this.dataChanged.emit(newData)
  }
}
