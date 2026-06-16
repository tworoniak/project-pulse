import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Phase } from '../../../../shared/models/phase.model';

const STATUS_ICONS: Record<string, string> = {
  'complete': '✓',
  'active':   '●',
  'pending':  '○',
  'blocked':  '✕',
};

@Component({
  selector: 'app-phase-timeline',
  standalone: true,
  imports: [NgClass],
  templateUrl: './phase-timeline.component.html',
  styleUrl: './phase-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhaseTimelineComponent {
  phases        = input<Phase[]>([]);
  selectedPhase = input<Phase | null>(null);
  phaseSelected = output<Phase>();

  readonly statusIcons = STATUS_ICONS;

  selectPhase(phase: Phase): void {
    this.phaseSelected.emit(phase);
  }

  isSelected(phase: Phase): boolean {
    return this.selectedPhase()?.id === phase.id;
  }
}
