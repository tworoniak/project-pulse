import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';
import { NgClass, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../shared/models/project.model';

const STATUS_LABELS: Record<string, string> = {
  'planning':    'Planning',
  'in-progress': 'In Progress',
  'review':      'Review',
  'complete':    'Complete',
  'on-hold':     'On Hold',
};

@Component({
  selector: 'app-project-header',
  standalone: true,
  imports: [NgClass, RouterLink, DatePipe],
  templateUrl: './project-header.component.html',
  styleUrl: './project-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectHeaderComponent {
  project = input.required<Project>();

  statusLabel(status: string): string {
    return STATUS_LABELS[status] ?? status;
  }
}
