import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: GetApiService) { }

  db = [{}];

  ngOnInit(): void {
    for (let page = 1; page <= 500; page++) {
      this.api.apiCall(page).subscribe((data: any) => {
        for (let item = 0; item < 20; item++) {
          const items = data.results[item];
          this.db.push(items)
        }
      })
    }
  }

}
