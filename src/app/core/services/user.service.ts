import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { MOCK_USERS } from '../mock/users.mock';

@Injectable({ providedIn: 'root' })
export class UserService {
  getAll(): Observable<User[]> {
    return of(MOCK_USERS);
  }

  getById(id: string): Observable<User | undefined> {
    return of(MOCK_USERS.find(u => u.id === id));
  }
}
