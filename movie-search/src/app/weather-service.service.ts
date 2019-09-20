import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  weatherServerUrl: 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getWeatherReportByCode(code): Observable<any>  {
    return this.http.get('http://localhost:3000/title/'  + code, this.httpOptions);
  }

}
