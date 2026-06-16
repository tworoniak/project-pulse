import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProjectService } from './services/project.service';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe, ProjectsGridComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private projectService = inject(ProjectService);

  readonly projects$ = this.projectService.getAll();
}
