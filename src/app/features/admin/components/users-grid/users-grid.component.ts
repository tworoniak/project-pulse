import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi, GridOptions, GridReadyEvent, themeQuartz } from 'ag-grid-community';
import { User } from '../../../../shared/models/user.model';
import { MOCK_USERS } from '../../../../core/mock/users.mock';
import { USER_COLUMNS } from './users-grid.columns';

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
  selector: 'app-users-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './users-grid.component.html',
  styleUrl: './users-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersGridComponent {
  readonly columns  = USER_COLUMNS;
  readonly theme    = gridTheme;
  readonly rowData: User[] = [...MOCK_USERS];

  private gridApi = signal<GridApi<User> | null>(null);

  readonly gridOptions: GridOptions<User> = {
    animateRows:       true,
    suppressCellFocus: false,
    domLayout:         'autoHeight',
    defaultColDef: {
      resizable: true,
    },
  };

  onGridReady(event: GridReadyEvent<User>): void {
    this.gridApi.set(event.api);
  }

  addUser(user: User): void {
    this.gridApi()?.applyTransaction({ add: [user], addIndex: 0 });
  }
}
