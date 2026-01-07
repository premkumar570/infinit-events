import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormService } from '../../../../core/services/event-form.service';

@Component({
    selector: 'app-exhibition-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './exhibition-info.component.html',
    styleUrl: './exhibition-info.component.css'
})
export class ExhibitionInfoComponent implements OnInit {
    @Output() next = new EventEmitter<void>();
    @Output() prev = new EventEmitter<void>();

    private fb = inject(FormBuilder);
    private eventService = inject(EventFormService);

    form: FormGroup = this.fb.group({
        stallsRequired: [0, [Validators.required, Validators.min(0)]],
        stallSize: ['3x3m', Validators.required],
        stallFabrication: [false],
        exhibitionLayout: [false],
        sponsorPackages: this.fb.group({
            platinum: [false],
            gold: [false],
            silver: [false]
        }),
        brandingMaterials: this.fb.group({
            backdrops: [false],
            standees: [false],
            banners: [false],
            digitalScreens: [false]
        })
    });

    ngOnInit() {
        const currentData = this.eventService.eventData().exhibition;
        if (currentData) {
            this.form.patchValue(currentData);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.eventService.updateExhibition(this.form.value);
            this.next.emit();
        } else {
            this.form.markAllAsTouched();
        }
    }
}
