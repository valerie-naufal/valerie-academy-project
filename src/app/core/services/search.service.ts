import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string>('');
  currentQuery = this.searchQuery.asObservable();

  updateQuery(query: string) {
    console.log('Search Query Updated:', query);
    this.searchQuery.next(query);
  }
}
