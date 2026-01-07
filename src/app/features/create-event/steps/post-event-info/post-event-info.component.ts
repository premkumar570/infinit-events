import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';

@Component({
    selector: 'app-post-event-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './post-event-info.component.html',
    styleUrl: './post-event-info.component.css'
})
export class PostEventInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();
    @Output() finish = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    form: FormGroup = this.fb.group({
        feedbackForms: [false],
        certificateDistribution: [false],
        thankYouEmails: [false],
        photoVideoEditing: [false],
        postEventReport: [false],
        roiAnalysis: [false]
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().postEvent;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updatePostEvent(this.form.value);
            this.finish.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
