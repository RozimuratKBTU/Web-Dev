import { Component } from '@angular/core';
import {Album} from "../albums";
import {AlbumsService} from "./albums.service";
import {response} from "express";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-album-component',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './album-component.component.html',
  styleUrls: ['./album-component.component.css']
})
export class AlbumComponentComponent {
  albums: Album[];
  searchTerm = '';

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
  }
  ngOnInit(){
    this.albumsService.getAlbums().subscribe(
      (response) => {
        this.albums = response.slice(0, 15);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteAlbum(album: Album){
    const index = this.albums.indexOf(album);
    if(index !== -1){
      this.albums.splice(index,1);
    }
  }

  search(value: string){
    this.albums = this.albums.filter((val =>
    val.title.toLowerCase().includes(value)))
  }
}
