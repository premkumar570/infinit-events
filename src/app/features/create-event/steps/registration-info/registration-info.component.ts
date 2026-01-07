import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';
import { UserRole } from '../../../../core/models/event.model';

@Component({
    selector: 'app-registration-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './registration-info.component.html',
    styleUrl: './registration-info.component.css'
})
export class RegistrationInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    roles: UserRole[] = ['Student', 'Delegate', 'Speaker', 'VIP', 'Sponsor'];

    form: FormGroup = this.fb.group({
        onlineRegistration: [false],
        onsiteBooth: [false],
        registrationTypes: [[]],
        paymentGateway: [false],
        delegateKit: this.fb.group({
            bags: [false],
            badges: [false],
            lanyards: [false],
            certificates: [false]
        }),
        ticketTypes: this.fb.group({
            free: [false],
            paid: [false],
            tiered: [false]
        })
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().registration;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    toggleRole(role: UserRole) {
        const current = this.form.value.registrationTypes as UserRole[];
        if (current.includes(role)) {
            this.form.patchValue({ registrationTypes: current.filter(r => r !== role) });
        } else {
            this.form.patchValue({ registrationTypes: [...current, role] });
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateRegistration(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
