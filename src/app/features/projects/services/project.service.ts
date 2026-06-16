import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../../shared/models/project.model';
import { MOCK_PROJECTS } from '../../../core/mock/projects.mock';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getAll(): Observable<Project[]> {
    return of(MOCK_PROJECTS);
  }

  getById(id: string): Observable<Project | undefined> {
    return of(MOCK_PROJECTS.find(p => p.id === id));
  }
}
