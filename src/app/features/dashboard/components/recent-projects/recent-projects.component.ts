import { Component, ChangeDetectionStrategy, input, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridOptions, GridReadyEvent, RowClickedEvent, themeQuartz } from 'ag-grid-community';
import { Project } from '../../../../shared/models/project.model';
import { RECENT_PROJECTS_COLUMNS } from './recent-projects.columns';

const PRIORITY_ORDER: Record<string, number> = {
  critical: 0,
  high:     1,
  medium:   2,
  low:      3,
};

const gridTheme = themeQuartz.withParams({
  backgroundColor:       '#161926',
  foregroundColor:       '#e2e6f0',
  headerBackgroundColor: '#1e2235',
  headerTextColor:       '#8b90a8',
  borderColor:           '#2a2f47',
  accentColor:           '#6c8ef5',
  rowHoverColor:         'rgba(108, 142, 245, 0.06)',
  browserColorScheme:    'dark',
});

@Component({
  selector: 'app-recent-projects',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentProjectsComponent {
  private router = inject(Router);

  projects = input<Project[]>([]);

  topProjects = computed(() =>
    [...this.projects()]
      .sort((a, b) => {
        const diff = PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
        if (diff !== 0) return diff;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      })
      .slice(0, 8),
  );

  readonly columns  = RECENT_PROJECTS_COLUMNS;
  readonly theme    = gridTheme;

  private gridApi = signal<GridApi<Project> | null>(null);

  readonly gridOptions: GridOptions<Project> = {
    suppressMenuHide:  true,
    animateRows:       true,
    domLayout:         'autoHeight',
    suppressCellFocus: false,
    defaultColDef: {
      resizable: true,
      sortable:  false,
      filter:    false,
    },
  };

  onGridReady(event: GridReadyEvent<Project>): void {
    this.gridApi.set(event.api);
  }

  onRowClicked(event: RowClickedEvent<Project>): void {
    if (event.data?.id) {
      this.router.navigate(['/projects', event.data.id]);
    }
  }
}
