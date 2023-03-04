import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Genius } from '../domain/genius/genius';
import { GeniusResponse } from '../domain/genius/genius-response';

@Injectable({
  providedIn: 'root'
})
export class GeniusService extends HttpService<Genius, GeniusResponse> {

  constructor(private http: HttpClient) {
    super(http, 'genius');
  }
}
