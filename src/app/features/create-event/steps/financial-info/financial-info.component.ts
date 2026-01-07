import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';

@Component({
    selector: 'app-financial-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './financial-info.component.html',
    styleUrl: './financial-info.component.css'
})
export class FinancialInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    form: FormGroup = this.fb.group({
        budgetEstimate: [0, [Validators.required, Validators.min(0)]],
        paymentTerms: [''],
        vendorManagement: [false],
        invoiceHandling: [false],
        expenseTracking: [false],
        auditReadyReports: [false]
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().financial;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateFinancial(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
