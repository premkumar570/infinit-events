import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';

@Component({
    selector: 'app-marketing-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './marketing-info.component.html',
    styleUrl: './marketing-info.component.css'
})
export class MarketingInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    form: FormGroup = this.fb.group({
        website: [false],
        socialMedia: [false],
        emailCampaigns: [false],
        videoPromotion: [false],
        mediaCoverage: [false],
        pressRelease: [false]
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().marketing;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateMarketing(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
