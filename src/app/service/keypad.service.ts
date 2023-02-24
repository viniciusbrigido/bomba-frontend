import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Keypad } from '../domain/keypad/keypad';
import { KeypadResponse } from '../domain/keypad/keypad-response';

@Injectable({
  providedIn: 'root'
})
export class KeypadService extends HttpService<Keypad, KeypadResponse> {

  constructor(private http: HttpClient) {
    super(http, 'keypad');
  }
}
