import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SoundcloudApiService {

  private clientId: string = 'e59d8b005900e38649c1882b87cd828d';

  constructor(private http: HttpClient) {}

  searchSongs(keyword: string): string[] {
    let songsNamesList = [];
    let url = this.makeSearchUrl(keyword);
    console.log('url -> ', url);

    this.http.get(url).subscribe((response: any) => {
      console.log('response', response);
      response.collection | response.map(item => {
        songsNamesList.push(item.title);
      })
    });

    return songsNamesList;
  }
  
  private makeSearchUrl(keyword: string) : string {
    return `https://api.soundcloud.com/tracks?client_id=${this.clientId}&q=${keyword}`;
    // &linked_partitioning=1&limit=4
  }
 
}
