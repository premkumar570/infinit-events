import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';
import { SeatingStyle } from '../../../../core/models/event.model';

@Component({
    selector: 'app-venue-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './venue-info.component.html',
    styleUrl: './venue-info.component.css'
})
export class VenueInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    seatingStyles: SeatingStyle[] = ['Theatre', 'Classroom', 'Round Table'];

    form: FormGroup = this.fb.group({
        type: ['Hotel', Validators.required],
        hallsRequired: [1, [Validators.required, Validators.min(1)]],
        seatingStyle: [[]],
        techRequirements: this.fb.group({
            projectors: [false],
            ledWall: [false],
            soundSystem: [false],
            stageLighting: [false],
            microphones: [false]
        }),
        registrationDesk: [false],
        vipArea: [false],
        catering: this.fb.group({
            teaCoffee: [false],
            lunch: [false],
            galaDinner: [false]
        })
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().venue;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    toggleSeatingStyle(style: SeatingStyle) {
        const current = this.form.value.seatingStyle as SeatingStyle[];
        if (current.includes(style)) {
            this.form.patchValue({ seatingStyle: current.filter(s => s !== style) });
        } else {
            this.form.patchValue({ seatingStyle: [...current, style] });
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateVenue(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
