import { Component } from '@angular/core';
import {Album} from "../albums";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './album-detail-component.component.html',
  styleUrls: ['./album-detail-component.component.css']
})
export class AlbumDetailComponentComponent {
  // album: Album;
  // newTitle: string;

  constructor(private route:ActivatedRoute, ) {

  }

  goBack(){

  }

  ngOnInit(){

  }

  saveTitle(){

  }


}
