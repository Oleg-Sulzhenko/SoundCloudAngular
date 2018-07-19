import { Component, OnDestroy, ViewChild } from '@angular/core';
import { SoundcloudApiService } from './services/soundcloud-api.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  @ViewChild('inputKeyword') inputKeyword;
  $searchSub: Subscription;
  songsList: Array<string> = [];
  nextLink: String;

  constructor(private scApi: SoundcloudApiService) {}

  search() {
    let keyWord = this.inputKeyword.nativeElement.value;

    this.$searchSub = this.scApi.search(keyWord).subscribe((response: any) => {
      let res = response.json();
      this.nextLink = res.next_href;

      res.collection.map(item => {
        this.songsList.push(item.title);
      })
      
    });
  }

  next() {

  }

  ngOnDestroy() {
    this.$searchSub.unsubscribe();
  }

}
