import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-user-actions-cell-renderer',
  standalone: true,
  imports: [],
  template: `
    @if (pendingDelete()) {
      <button class="btn-confirm" (click)="confirmDelete()" aria-label="Confirm delete user">Confirm?</button>
      <button class="btn-cancel"  (click)="cancelDelete()"  aria-label="Cancel delete">Cancel</button>
    } @else {
      <button class="btn-edit"   (click)="startEdit()"     aria-label="Edit user">Edit</button>
      <button class="btn-delete" (click)="requestDelete()" aria-label="Delete user">Delete</button>
    }
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 100%;
    }
    button {
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      padding: 3px 10px;
      transition: opacity 150ms ease;
    }
    button:hover { opacity: 0.8; }
    button:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
    .btn-edit    { background: rgba(108, 142, 245, 0.15); color: #6c8ef5; }
    .btn-delete  { background: rgba(240, 82, 82, 0.15);   color: #f05252; }
    .btn-confirm { background: rgba(240, 82, 82, 0.25);   color: #f05252; font-weight: 600; }
    .btn-cancel  { background: rgba(139, 144, 168, 0.15); color: #8b90a8; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserActionsCellRendererComponent implements ICellRendererAngularComp {
  private params = signal<ICellRendererParams<User> | null>(null);
  readonly pendingDelete = signal(false);

  private rowData = computed(() => this.params()?.data ?? null);

  agInit(params: ICellRendererParams<User>): void {
    this.params.set(params);
  }

  refresh(params: ICellRendererParams<User>): boolean {
    this.params.set(params);
    return true;
  }

  startEdit(): void {
    const p = this.params();
    const rowIndex = p?.node.rowIndex;
    if (p && rowIndex != null) {
      p.api.startEditingCell({ rowIndex, colKey: 'name' });
    }
  }

  requestDelete(): void {
    this.pendingDelete.set(true);
  }

  cancelDelete(): void {
    this.pendingDelete.set(false);
  }

  confirmDelete(): void {
    const data = this.rowData();
    if (data) {
      this.params()?.api.applyTransaction({ remove: [data] });
    }
    this.pendingDelete.set(false);
  }
}
