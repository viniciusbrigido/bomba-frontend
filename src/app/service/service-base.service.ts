import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ServiceBaseService<T, U, L> {

  protected constructor(
    private httpClient: HttpClient,
    private apiUrl: string
  ) {}

  list(): Observable<L[]> {
    return this.httpClient.get<L[]>(this.url);
  }

  resolve(data: T): Observable<U> {
    return this.httpClient.post<U>(`${this.url}/resolve`, data);
  }

  delete(id: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.url}/${id}`);
  }

  get url() {
    return 'http://localhost:8080/' + this.apiUrl;
  }
}
