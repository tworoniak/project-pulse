import { ColDef } from 'ag-grid-community';
import { User } from '../../../../shared/models/user.model';
import { RoleCellRendererComponent } from '../cell-renderers/role-cell-renderer/role-cell-renderer.component';
import { UserActionsCellRendererComponent } from '../cell-renderers/user-actions-cell-renderer/user-actions-cell-renderer.component';

export const USER_COLUMNS: ColDef<User>[] = [
  {
    field:      'name',
    headerName: 'Name',
    flex:       1,
    minWidth:   150,
    sortable:   true,
    filter:     'agTextColumnFilter',
    resizable:  true,
    editable:   true,
  },
  {
    field:      'email',
    headerName: 'Email',
    flex:       2,
    minWidth:   200,
    sortable:   true,
    filter:     'agTextColumnFilter',
    resizable:  true,
    editable:   true,
  },
  {
    field:        'role',
    headerName:   'Role',
    width:        140,
    sortable:     true,
    filter:       'agSetColumnFilter',
    resizable:    true,
    editable:     true,
    cellRenderer: RoleCellRendererComponent,
    cellEditor:   'agSelectCellEditor',
    cellEditorParams: { values: ['admin', 'pm', 'viewer'] },
  },
  {
    headerName:               'Actions',
    width:                    190,
    sortable:                 false,
    filter:                   false,
    resizable:                false,
    suppressMovable:          true,
    suppressHeaderMenuButton: true,
    suppressNavigable:        true,
    cellRenderer:             UserActionsCellRendererComponent,
  },
];
