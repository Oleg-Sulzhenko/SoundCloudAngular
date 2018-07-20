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
  resultsOffset = 0;

  constructor(private scApi: SoundcloudApiService) {}

  searchSongs() {
    const keyWord = this.inputKeyword.nativeElement.value;
    this.songsNamesList = this.scApi.searchSongs(keyWord, this.resultsOffset);
  }

  next() {
    this.resultsOffset = this.resultsOffset + this.songsNamesList.length;
    this.searchSongs();
  }

  detect() {
    this.resultsOffset = 0;
  }

}
