import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Wire } from '../domain/wire/wire';
import { WireResponse } from '../domain/wire/wire-response';

@Injectable({
  providedIn: 'root'
})
export class WireService extends HttpService<Wire, WireResponse> {

  constructor(private http: HttpClient) {
    super(http, 'wire');
  }
}
