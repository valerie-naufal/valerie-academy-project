import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string>('');
  currentQuery = this.searchQuery.asObservable();

  updateQuery(query: string) {
    this.searchQuery.next(query);
  }
}
