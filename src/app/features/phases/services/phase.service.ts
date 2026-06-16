import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phase } from '../../../shared/models/phase.model';
import { WorkItem } from '../../../shared/models/work-item.model';
import { MOCK_PHASES } from '../../../core/mock/phases.mock';
import { MOCK_WORK_ITEMS } from '../../../core/mock/work-items.mock';

@Injectable({ providedIn: 'root' })
export class PhaseService {
  getAll(): Observable<Phase[]> {
    return of(MOCK_PHASES);
  }

  getByProjectId(projectId: string): Observable<Phase[]> {
    return of(MOCK_PHASES.filter(ph => ph.projectId === projectId));
  }

  getById(id: string): Observable<Phase | undefined> {
    return of(MOCK_PHASES.find(ph => ph.id === id));
  }

  getWorkItemsByPhaseId(phaseId: string): Observable<WorkItem[]> {
    return of(MOCK_WORK_ITEMS.filter(wi => wi.phaseId === phaseId));
  }

  getAllWorkItems(): Observable<WorkItem[]> {
    return of(MOCK_WORK_ITEMS);
  }
}
