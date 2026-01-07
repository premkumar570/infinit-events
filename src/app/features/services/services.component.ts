import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="services-section">
        <div class="container">
            <div class="section-header">
                <h2>End-to-End Event Solutions</h2>
                <p>We manage every aspect of your event — from initial planning to post-event analysis, ensuring seamless
                    execution and memorable experiences.</p>
            </div>

            <div class="services-grid">
                <div class="service-card" *ngFor="let service of services">
                    <div class="service-icon">{{ service.icon }}</div>
                    <h4>{{ service.title }}</h4>
                    <p>{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
  `,
    styles: [`
    .services-section {
        padding: 140px 0;
        background: var(--bg-primary);
    }

    .section-header {
        text-align: center;
        margin-bottom: 100px;
    }

    .section-header h2 {
        font-size: 64px;
        margin-bottom: 24px;
        letter-spacing: -0.01em;
        color: var(--text-white);
    }

    .section-header p {
        color: var(--text-muted);
        max-width: 750px;
        margin: 0 auto;
        font-size: 20px;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
    }

    .service-card {
        background: var(--bg-secondary);
        border: 1px solid rgba(255, 255, 255, 0.03);
        padding: 48px 36px;
        border-radius: 24px;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        box-shadow: var(--shadow-sm);
    }

    .service-card:hover {
        transform: translateY(-12px);
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(247, 198, 51, 0.3);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    }

    .service-icon {
        width: 56px;
        height: 56px;
        background: var(--primary);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-dark);
        font-size: 28px;
        margin-bottom: 32px;
    }

    .service-card h4 {
        font-size: 24px;
        margin-bottom: 16px;
        font-weight: 400;
        color: var(--text-white);
    }

    .service-card p {
        color: var(--text-muted);
        font-size: 16px;
        line-height: 1.6;
    }

    @media (max-width: 1200px) {
        .services-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .services-grid {
            grid-template-columns: 1fr;
        }
    }
  `]
})
export class ServicesComponent {
    services = [
        { icon: '🏛️', title: 'Venue Management', description: 'Premium venue selection, setup, and technical requirements including AV, staging, and lighting.' },
        { icon: '👥', title: 'Delegate Management', description: 'Complete registration systems, badge printing, delegate kits, and on-site support.' },
        { icon: '🎙️', title: 'Speaker Coordination', description: 'Travel arrangements, accommodation, session management, and AV requirements for speakers.' },
        { icon: '📅', title: 'Program Design', description: 'Agenda creation, session scheduling, abstract handling, and panel moderator coordination.' },
        { icon: '📸', title: 'Marketing & Media', description: 'Event websites, social media campaigns, video production, and press release management.' },
        { icon: '✈️', title: 'Logistics & Travel', description: 'Airport transfers, delegate transport, hotel bookings, and complete travel coordination.' },
        { icon: '🍴', title: 'Catering Services', description: 'From tea breaks to gala dinners — customized catering solutions for every event.' },
        { icon: '🤝', title: 'Sponsorship Management', description: 'Sponsor packages, exhibition stalls, branding materials, and ROI analysis.' }
    ];
}
