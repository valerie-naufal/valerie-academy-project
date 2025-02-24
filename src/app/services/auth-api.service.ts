import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponse {
  accessToken: string;
  role: string; 
}

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private apiUrl = 'https://your-api-url.com/auth'; // Replace with API link

  constructor(private http: HttpClient) {}

  login(credentials: {
    email: string;
    password: string;
  }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials);
  }
}
