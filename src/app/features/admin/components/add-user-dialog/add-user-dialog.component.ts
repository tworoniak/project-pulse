import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../../../shared/models/user.model';

export interface AddUserResult {
  name:  string;
  email: string;
  role:  User['role'];
}

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './add-user-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserDialogComponent {
  private dialogRef = inject(MatDialogRef<AddUserDialogComponent>);

  readonly form = new FormGroup({
    name:  new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    role:  new FormControl<User['role'] | ''>('', { nonNullable: true, validators: [Validators.required] }),
  });

  submit(): void {
    if (this.form.valid) {
      const { name, email, role } = this.form.getRawValue();
      this.dialogRef.close({ name, email, role } as AddUserResult);
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
