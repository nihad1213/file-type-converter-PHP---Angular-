import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  convert(file: File, endpoint: string) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}${endpoint}`, formData);
  }
}