import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-why-us',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="why-us-section">
        <div class="container why-us-container">
            <div class="why-us-content">
                <span class="section-label">Why Choose Us</span>
                <h2>Trusted by Leading Organizations</h2>
                <p>With over a decade of experience in professional event management, we've built a reputation for flawless
                    execution and innovative solutions. Our team of experts ensures every detail is perfect.</p>

                <div class="check-list">
                    <div class="check-item" *ngFor="let point of whyUsPoints">
                        <div class="check-icon-box">✓</div> {{ point }}
                    </div>
                </div>
            </div>

            <div class="why-us-stats">
                <div class="stat-box" *ngFor="let stat of whyUsStats">
                    <h3>{{ stat.value }}</h3>
                    <p>{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
  `,
    styles: [`
    .why-us-section {
        padding: 140px 0;
        background: var(--bg-secondary);
    }

    .why-us-container {
        display: flex;
        gap: 100px;
        align-items: center;
    }

    .why-us-content {
        flex: 1.2;
    }

    .why-us-content h2 {
        font-size: 64px;
        margin-bottom: 32px;
        letter-spacing: -0.01em;
        color: var(--text-white);
    }

    .why-us-content p {
        color: var(--text-muted);
        font-size: 20px;
        margin-bottom: 64px;
    }

    .check-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }

    .check-item {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        font-weight: 500;
        color: var(--text-white);
    }

    .check-icon-box {
        width: 24px;
        height: 24px;
        background: rgba(247, 198, 51, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary);
        font-size: 14px;
    }

    .why-us-stats {
        flex: 0.8;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }

    .stat-box {
        background: var(--bg-primary);
        padding: 48px 36px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.03);
    }

    .stat-box h3 {
        font-size: 48px;
        margin-bottom: 12px;
        color: var(--primary);
        font-family: var(--font-display);
        font-weight: 700;
    }

    .stat-box p {
        color: var(--text-muted);
        font-size: 16px;
        font-weight: 500;
    }

    @media (max-width: 1024px) {
        .why-us-container {
            flex-direction: column;
            text-align: center;
        }
        .check-list {
            margin-bottom: 60px;
        }
        .why-us-content h2 {
            font-size: 48px;
        }
    }
  `]
})
export class WhyUsComponent {
    whyUsPoints = [
        'Complete end-to-end event management',
        'Real-time budget tracking & financial reports',
        'Advanced registration & ticketing systems',
        '24/7 on-ground support team',
        'Dedicated project manager for every event',
        'Vendor network across 80+ cities',
        'Post-event analytics & ROI reports',
        'Custom branding & marketing solutions'
    ];

    whyUsStats = [
        { value: '12+', label: 'Years of Excellence' },
        { value: '50+', label: 'Expert Team Members' },
        { value: '80+', label: 'Cities In India' },
        { value: '100%', label: 'On-Time Delivery' }
    ];
}
