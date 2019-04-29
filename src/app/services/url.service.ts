import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UrlService {
  constructor(private http: HttpClient) {}

  shortenUrl(form) {
    return this.http.post('http://localhost:3000/api/url/shorten', form);
  }
}
