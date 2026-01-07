import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormService } from '../../core/services/event-form.service';
import { BasicInfoComponent } from './steps/basic-info/basic-info.component';
import { VenueInfoComponent } from './steps/venue-info/venue-info.component';
import { AccommodationInfoComponent } from './steps/accommodation-info/accommodation-info.component';
import { ProgramInfoComponent } from './steps/program-info/program-info.component';
import { RegistrationInfoComponent } from './steps/registration-info/registration-info.component';
import { ExhibitionInfoComponent } from './steps/exhibition-info/exhibition-info.component';
import { MarketingInfoComponent } from './steps/marketing-info/marketing-info.component';
import { LogisticsInfoComponent } from './steps/logistics-info/logistics-info.component';
import { FinancialInfoComponent } from './steps/financial-info/financial-info.component';
import { PostEventInfoComponent } from './steps/post-event-info/post-event-info.component';

@Component({
    selector: 'app-create-event',
    standalone: true,
    imports: [
        CommonModule,
        BasicInfoComponent,
        VenueInfoComponent,
        AccommodationInfoComponent,
        ProgramInfoComponent,
        RegistrationInfoComponent,
        ExhibitionInfoComponent,
        MarketingInfoComponent,
        LogisticsInfoComponent,
        FinancialInfoComponent,
        PostEventInfoComponent
    ],
    templateUrl: './create-event.component.html',
    styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
    private eventService = inject(EventFormService);
    currentStep = signal(1);
    steps = [
        { id: 1, label: 'Basic Info', icon: '📝' },
        { id: 2, label: 'Venue', icon: 'austin' }, // Placeholder icon
        { id: 3, label: 'Accommodation', icon: '🛏️' },
        { id: 4, label: 'Program', icon: '🎤' },
        { id: 5, label: 'Registration', icon: '🎟️' },
        { id: 6, label: 'Exhibition', icon: '🏪' },
        { id: 7, label: 'Marketing', icon: '📢' },
        { id: 8, label: 'Logistics', icon: '🚚' },
        { id: 9, label: 'Financial', icon: '💰' },
        { id: 10, label: 'Post-Event', icon: '🏁' }
    ];

    nextStep() {
        if (this.currentStep() < this.steps.length) {
            this.currentStep.update(v => v + 1);
        }
    }

    prevStep() {
        if (this.currentStep() > 1) {
            this.currentStep.update(v => v - 1);
        }
    }

    finishSetup() {
        this.currentStep.set(11);
        console.log('Event Data:', this.eventService.eventData());
    }

    goToStep(stepId: number) {
        this.currentStep.set(stepId);
    }
}
