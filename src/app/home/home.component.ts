import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  first: boolean = false;
  second: boolean= false;
  third: boolean= false;

  get name() {
    if(this.first){
      return 'First'
    }
    if(this.second){
      return 'Second'
    }
    if(this.third){
      return 'Third'
    }
    return 'Select'
  }

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

  toggle(type: string){
    if(type === 'first'){
      this.first = !this.first;
    } else{
      this.first = false;
    }
    if(type === 'second'){
      this.second = !this.second;
    } else{
      this.second = false;
    }
    if(type === 'third'){
      this.third = !this.third;
    } else{
      this.third = false;
    }
  }

}
