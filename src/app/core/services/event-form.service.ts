import { Injectable, signal, computed } from '@angular/core';
import { MeetyEvent, BasicEventInfo, VenueRequirements } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})
export class EventFormService {
    // Main signal to hold the partial event data during creation
    private readonly _eventData = signal<Partial<MeetyEvent>>({
        basicInfo: {
            title: '',
            type: 'Conference',
            startDate: new Date(),
            endDate: new Date(),
            city: '',
            expectedParticipants: 0,
            theme: ''
        },
        // Initialize other sections with defaults as needed
        venue: {
            type: 'Hotel',
            hallsRequired: 1,
            seatingStyle: [],
            techRequirements: {
                projectors: false,
                ledWall: false,
                soundSystem: false,
                stageLighting: false,
                microphones: false
            },
            registrationDesk: false,
            vipArea: false,
            catering: {
                teaCoffee: false,
                lunch: false,
                galaDinner: false
            }
        }
    });

    readonly eventData = this._eventData.asReadonly();

    updateBasicInfo(info: Partial<BasicEventInfo>) {
        this._eventData.update(current => ({
            ...current,
            basicInfo: { ...current.basicInfo!, ...info }
        }));
    }

    updateVenue(venue: Partial<VenueRequirements>) {
        this._eventData.update(current => ({
            ...current,
            venue: { ...current.venue!, ...venue }
        }));
    }

    updateAccommodation(data: any) {
        this._eventData.update(current => ({ ...current, accommodation: { ...current.accommodation, ...data } }));
    }

    updateProgram(data: any) {
        this._eventData.update(current => ({ ...current, program: { ...current.program, ...data } }));
    }

    updateRegistration(data: any) {
        this._eventData.update(current => ({ ...current, registration: { ...current.registration, ...data } }));
    }

    updateExhibition(data: any) {
        this._eventData.update(current => ({ ...current, exhibition: { ...current.exhibition, ...data } }));
    }

    updateMarketing(data: any) {
        this._eventData.update(current => ({ ...current, marketing: { ...current.marketing, ...data } }));
    }

    updateLogistics(data: any) {
        this._eventData.update(current => ({ ...current, logistics: { ...current.logistics, ...data } }));
    }

    updateFinancial(data: any) {
        this._eventData.update(current => ({ ...current, financial: { ...current.financial, ...data } }));
    }

    updatePostEvent(data: any) {
        this._eventData.update(current => ({ ...current, postEvent: { ...current.postEvent, ...data } }));
    }

    // Helper to get total progress (optional)
    readonly progress = computed(() => {
        // calculate completion percentage
        return 10;
    });
}
