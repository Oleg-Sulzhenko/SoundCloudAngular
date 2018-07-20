import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoundcloudApiService {
  private clientId = 'e59d8b005900e38649c1882b87cd828d';

  constructor(private http: HttpClient) {}

  searchSongs(keyword: string, offset: number): string[] {

    const songsNamesList = [];
    this.resultsOffset = offset;
    const url = this.makeSearchUrl(keyword, offset);

    this.http.get(url).subscribe((response: any) => {
      response.map(item => {
        songsNamesList.push(item.title);
      });
    });

    return songsNamesList;
  }

  private makeSearchUrl(keyword: string, offset: number): string {
    return `https://api.soundcloud.com/tracks?client_id=${this.clientId}&q=${keyword}&offset=${offset}`;
  }

}
