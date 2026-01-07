import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-event-types',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="event-types-section">
        <div class="container">
            <div class="section-header">
                <span class="section-label">What We Do</span>
                <h2>Events We Specialize In</h2>
                <p>Whether it's an intimate workshop or a grand international conference, we have the expertise to deliver
                    excellence.</p>
            </div>

            <div class="types-grid">
                <div class="type-card" *ngFor="let type of eventTypes">
                    <img [src]="type.image" [alt]="type.title">
                    <div class="type-overlay">
                        <h4>{{ type.title }}</h4>
                        <p>{{ type.description }}</p>
                        <div class="type-btn">↗</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
    styles: [`
    .event-types-section {
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

    .types-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    .type-card {
        height: 480px;
        border-radius: 32px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .type-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .type-card:hover img {
        transform: scale(1.1);
    }

    .type-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(5, 10, 24, 0.95), transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 48px;
    }

    .type-btn {
        position: absolute;
        bottom: 48px;
        right: 48px;
        width: 56px;
        height: 56px;
        background: var(--primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-dark);
        font-size: 20px;
        transition: all 0.3s ease;
    }

    .type-card:hover .type-btn {
        transform: rotate(45deg) scale(1.1);
    }

    .type-overlay h4 {
        font-size: 36px;
        margin-bottom: 12px;
        font-weight: 400;
        color: var(--text-white);
    }

    .type-overlay p {
        color: var(--text-muted);
        font-size: 16px;
        max-width: 400px;
    }

    @media (max-width: 768px) {
        .types-grid {
            grid-template-columns: 1fr;
        }
        .section-header h2 {
            font-size: 48px;
        }
    }
  `]
})
export class EventTypesComponent {
    eventTypes = [
        { title: 'Conferences & Congresses', description: 'Large-scale professional gatherings with keynote speakers, multiple tracks, and networking sessions.', image: 'https://images.unsplash.com/photo-1540575861501-7ad058ec383f?auto=format&fit=crop&q=80' },
        { title: 'Exhibitions & Expos', description: 'Trade shows and exhibitions with custom stall fabrication, sponsor branding, and visitor management.', image: 'https://images.unsplash.com/photo-1531058021387-323ac5640306?auto=format&fit=crop&q=80' },
        { title: 'Corporate Events', description: 'Board meetings, product launches, annual general meetings, and team-building experiences.', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80' },
        { title: 'Virtual & Hybrid Events', description: 'Seamless digital experiences combining in-person and online participation with advanced streaming.', image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80' }
    ];
}
