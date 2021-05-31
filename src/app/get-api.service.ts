import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  apiKey ='53fd961288482378e2dae75e60062b6c';
  urldiscover = 'https://api.themoviedb.org/3/discover/movie?api_key=';
  page = 'page=';

  constructor( private http: HttpClient) { }
  
  apiCall (page: any){
    // return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=53fd961288482378e2dae75e60062b6c&language=en-US');
    return this.http.get(this.urldiscover+this.apiKey+'&'+this.page+page);
  }
}
