import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNews(language: string, page: number): Observable<any> {
    const url = `${environment.RESTservices.news.baseUrl}${environment.RESTservices.news.search}?query=${language}&page=${page}`;
    return this.http.get(url).pipe(finalize(() => {}));
  }
}
