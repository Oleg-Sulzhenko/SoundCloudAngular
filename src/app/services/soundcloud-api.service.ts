import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class SoundcloudApiService {

  private clientId: string = 'e59d8b005900e38649c1882b87cd828d';

  constructor(private http: Http) {}

  search(keyword: string) {
    var url = this.makeSearchUri(keyword);
		return this.http.get(url);
  }
  
  private makeSearchUri(keyword: string) : string {
		return 'http://api.soundcloud.com/tracks?linked_partitioning=1&client_id=' + this.clientId + '&q=' + keyword + '&limit=6';
  }
 
}
