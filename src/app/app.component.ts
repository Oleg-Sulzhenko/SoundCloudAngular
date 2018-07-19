import { Component, ViewChild } from '@angular/core';
import { SoundcloudApiService } from './services/soundcloud-api.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputKeyword') inputKeyword;
  songsNamesList: Array<string> = [];
  nextLink: string;

  constructor(private scApi: SoundcloudApiService) {}

  searchSongs() {
    let keyWord = this.inputKeyword.nativeElement.value;
    this.songsNamesList = this.scApi.searchSongs(keyWord);
    console.log('this.songsList -> ', this.songsNamesList);
  }

  next() {

  }

}
