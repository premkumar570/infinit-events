import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';

@Component({
    selector: 'app-program-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './program-info.component.html',
    styleUrl: './program-info.component.css'
})
export class ProgramInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    form: FormGroup = this.fb.group({
        sessionTracks: [1, [Validators.required, Validators.min(1)]],
        keynoteSpeakers: [''], // Will handle as comma-separated or similar for now
        speakerTravel: [false],
        speakerAccommodation: [false],
        sessionChairDetails: [''],
        abstractHandling: [false],
        agendaCreated: [false],
        avRequirements: ['']
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().program;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateProgram(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
