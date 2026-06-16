import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { Phase } from '../../../../shared/models/phase.model';

@Component({
  selector: 'app-report-summary',
  standalone: true,
  imports: [],
  templateUrl: './report-summary.component.html',
  styleUrl: './report-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportSummaryComponent {
  phases = input<Phase[]>([]);

  totalPhases = computed(() => this.phases().length);

  overallProgress = computed(() => {
    const phases = this.phases();
    if (!phases.length) return 0;
    const sum = phases.reduce((acc, p) => acc + p.completionPct, 0);
    return Math.round(sum / phases.length);
  });

  onTrack = computed(() =>
    this.phases().filter(p => p.status === 'active' || p.status === 'complete').length,
  );

  blocked = computed(() =>
    this.phases().filter(p => p.status === 'blocked').length,
  );
}
