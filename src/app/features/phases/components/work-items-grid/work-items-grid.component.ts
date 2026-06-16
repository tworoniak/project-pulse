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
import { WorkItem } from '../../../../shared/models/work-item.model';
import { WORK_ITEM_COLUMNS } from './work-items-grid.columns';

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
  selector: 'app-work-items-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './work-items-grid.component.html',
  styleUrl: './work-items-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkItemsGridComponent {
  workItems = input<WorkItem[]>([]);

  readonly columns = WORK_ITEM_COLUMNS;
  readonly theme   = gridTheme;

  private gridApi = signal<GridApi<WorkItem> | null>(null);

  readonly gridOptions: GridOptions<WorkItem> = {
    suppressMenuHide:  true,
    animateRows:       true,
    suppressCellFocus: false,
    domLayout:         'autoHeight',
    defaultColDef: {
      resizable: true,
    },
  };

  onGridReady(event: GridReadyEvent<WorkItem>): void {
    this.gridApi.set(event.api);
  }
}
