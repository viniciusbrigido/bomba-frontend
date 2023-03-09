import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { WhosOnFirst } from '../domain/whos_on_first/whos-on-first';
import { WhosOnFirstResponse } from '../domain/whos_on_first/whos-on-first-response';
import { WhosOnFirstComplete } from '../domain/whos_on_first/whos-on-first-complete';

@Injectable({
  providedIn: 'root'
})
export class WhosOnFirstService extends BaseService<WhosOnFirst, WhosOnFirstResponse, WhosOnFirstComplete> {

  constructor(private http: HttpClient) {
    super(http, 'whos_on_first');
  }
}
