import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumnes().subscribe(data => {
      console.log(data);
      this.albums = data;
    })

  }

  buscar(event) {
    console.log("Buscar: ", event.detail.value);
  }

}
