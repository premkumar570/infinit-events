import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';

@Component({
    selector: 'app-logistics-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './logistics-info.component.html',
    styleUrl: './logistics-info.component.css'
})
export class LogisticsInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    form: FormGroup = this.fb.group({
        transport: [false],
        onGroundStaff: [0, [Validators.required, Validators.min(0)]],
        helpDesk: [false],
        security: [false],
        medical: [false],
        badgePrinting: [false],
        itSupport: [false]
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().logistics;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateLogistics(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
