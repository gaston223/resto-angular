import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../models/schedule.interface';
import { EveningEvent } from '../models/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private HttpClient : HttpClient) { }

  search(term:string): Observable<EveningEvent[]>{
    console.log('search')
    const termLowerCase = term.toLocaleLowerCase();
    return this.HttpClient
    .get<Schedule>('assets/schedules.json')
    .pipe(
      map(res => res.events.filter(evt=> evt.title.toLocaleLowerCase().indexOf(term) >-1 || evt.description.toLocaleLowerCase().indexOf(term) >-1)),
      tap(filteredEvents=> console.log('filteredEvents', filteredEvents))
      )
  }
}
