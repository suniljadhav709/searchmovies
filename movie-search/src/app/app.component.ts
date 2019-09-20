import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-search';
  code = '';
  report;

  constructor(private weatherSrv: WeatherServiceService) { }
  submit() {
    if(this.code != '') {
      this.weatherSrv.getWeatherReportByCode(this.code).subscribe( data => {
        this.report = data;
      })
    } else {
      alert('title can not be empty');
    }
  }
}
