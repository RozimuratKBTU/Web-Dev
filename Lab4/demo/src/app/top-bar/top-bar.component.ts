import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  // templateUrl: './top-bar.component.html',
  // styleUrls: ['./top-bar.component.css'],
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  title: String = 'My_First_App';
}
