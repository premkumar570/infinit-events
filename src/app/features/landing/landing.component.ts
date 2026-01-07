import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { EventTypesComponent } from '../event-types/event-types.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, ServicesComponent, EventTypesComponent, WhyUsComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  stats = [
    { value: '500+', label: 'Events Delivered' },
    { value: '50+', label: 'Cities Covered' },
    { value: '100K+', label: 'Delegates Served' },
    { value: '98%', label: 'Client Satisfaction' }
  ];
}
