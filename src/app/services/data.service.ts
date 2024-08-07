import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http//:some.shit';
  getData(){
    return ['one', 'two']
  }

  getPosts(): Observable<Data[]>{
    return this.http.get<Data[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) { }
}
