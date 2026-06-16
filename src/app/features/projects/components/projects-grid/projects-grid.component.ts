import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  GridApi,
  GridOptions,
  GridReadyEvent,
  themeQuartz,
} from 'ag-grid-community';
import { Project } from '../../../../shared/models/project.model';
import { PROJECT_COLUMNS } from './projects-grid.columns';

const gridTheme = themeQuartz.withParams({
  backgroundColor:      '#161926',
  foregroundColor:      '#e2e6f0',
  headerBackgroundColor: '#1e2235',
  headerTextColor:      '#8b90a8',
  borderColor:          '#2a2f47',
  accentColor:          '#6c8ef5',
  rowHoverColor:        'rgba(108, 142, 245, 0.06)',
  browserColorScheme:   'dark',
});

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsGridComponent {
  projects = input<Project[]>([]);

  readonly columns = PROJECT_COLUMNS;
  readonly theme   = gridTheme;

  private gridApi = signal<GridApi<Project> | null>(null);

  readonly gridOptions: GridOptions<Project> = {
    suppressMenuHide:  true,
    animateRows:       true,
    pagination:        true,
    paginationPageSize: 15,
    suppressCellFocus: false,
    defaultColDef: {
      resizable: true,
    },
  };

  onGridReady(event: GridReadyEvent<Project>): void {
    this.gridApi.set(event.api);
  }
}
