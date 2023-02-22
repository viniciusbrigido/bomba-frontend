import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Button } from '../domain/button';
import { ButtonResponse } from '../domain/button-response';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ButtonResponseSecondStep } from '../domain/button-response-second-step';

@Injectable({
  providedIn: 'root'
})
export class ButtonService extends HttpService<Button, ButtonResponse> {

  constructor(private http: HttpClient) {
    super(http, 'button');
  }

  resolveSecondStep(data: ButtonResponseSecondStep): Observable<ButtonResponse> {
    return this.http.post<ButtonResponse>(`${this.url}/resolve-second-step`, data);
  }
}
