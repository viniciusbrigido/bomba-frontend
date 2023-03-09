import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService<T, U> extends BaseService<T, U, T> {

}
