import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectService } from '../projects/services/project.service';
import { KpiCardsComponent } from './components/kpi-cards/kpi-cards.component';
import { StatusBreakdownComponent } from './components/status-breakdown/status-breakdown.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, KpiCardsComponent, StatusBreakdownComponent, RecentProjectsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private projectService = inject(ProjectService);

  projects = toSignal(this.projectService.getAll(), { initialValue: [] });
}
