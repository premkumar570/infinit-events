import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';

@Component({
    selector: 'app-accommodation-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './accommodation-info.component.html',
    styleUrl: './accommodation-info.component.css'
})
export class AccommodationInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    form: FormGroup = this.fb.group({
        roomCount: [0, [Validators.required, Validators.min(0)]],
        roomTypes: this.fb.group({
            single: [false],
            double: [false],
            suite: [false]
        }),
        speakerVipAllotment: [0, [Validators.required, Validators.min(0)]],
        hotelPreference: ['3-Star', Validators.required],
        airportTransfer: [false]
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().accommodation;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateAccommodation(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
