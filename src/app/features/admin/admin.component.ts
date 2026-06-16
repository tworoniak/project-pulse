import { Component, ChangeDetectionStrategy, inject, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { AddUserDialogComponent, AddUserResult } from './components/add-user-dialog/add-user-dialog.component';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UsersGridComponent, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  private dialog    = inject(MatDialog);
  private usersGrid = viewChild.required(UsersGridComponent);

  openAddUserDialog(): void {
    const ref = this.dialog.open(AddUserDialogComponent, {
      width:        '420px',
      disableClose: true,
    });

    ref.afterClosed().subscribe((result: AddUserResult | undefined) => {
      if (!result) return;
      const newUser: User = {
        id:    `u-${Date.now()}`,
        name:  result.name,
        email: result.email,
        role:  result.role,
      };
      this.usersGrid().addUser(newUser);
    });
  }
}
