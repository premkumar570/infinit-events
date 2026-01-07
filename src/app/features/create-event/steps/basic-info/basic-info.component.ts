import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';
import { EventType } from '../../../../core/models/event.model';

@Component({
    selector: 'app-basic-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './basic-info.component.html',
    styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    eventTypes: EventType[] = ['Conference', 'Exhibition', 'Workshop', 'Corporate', 'Virtual'];

    form: FormGroup = this.fb.group({
        title: ['', Validators.required],
        type: ['Conference', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        city: ['', Validators.required],
        expectedParticipants: [0, [Validators.required, Validators.min(1)]],
        theme: ['']
    });

    ngOnInit() {
        // Load existing data if available
        const currentData = this.eventService.eventData().basicInfo;
        if (currentData) {
            this.form.patchValue({
                ...currentData,
                // Format dates for input type="date"
                startDate: currentData.startDate ? this.formatDate(new Date(currentData.startDate)) : '',
                endDate: currentData.endDate ? this.formatDate(new Date(currentData.endDate)) : ''
            });
        }
    }

    private formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateBasicInfo(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
