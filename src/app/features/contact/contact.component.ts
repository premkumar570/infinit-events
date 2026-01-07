import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="contact-section">
        <div class="container contact-container">
            <div class="contact-info">
                <span class="section-label">Get in Touch</span>
                <h2>Let's Plan Your Next Event</h2>
                <p>Ready to create an unforgettable experience? Fill out the form and our team will reach out within 24
                    hours with a customized proposal.</p>

                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">✉️</div>
                        <div>
                            <label>Email Us</label>
                            <p>hello@infinit.events</p>
                        </div>
                    </div>
                    <div class="contact-method">
                        <div class="method-icon">📞</div>
                        <div>
                            <label>Call Us</label>
                            <p>+91 8341967534</p>
                        </div>
                    </div>
                    <div class="contact-method">
                        <div class="method-icon">📍</div>
                        <div>
                            <label>Visit Us</label>
                            <p>D.NO: 63-4-12, TOWERS
Purna Chandra Rao
Chandrarao Street,
Patamata Lanka
Vijayawada</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </section>


    
  `,
    styles: [`
    .contact-section {
        padding: 140px 0;
        background: var(--bg-primary);
    }

    .contact-container {
        display: flex;
        gap: 100px;
        align-items: flex-start;
    }

    .contact-info {
        flex: 1;
    }

    .contact-info h2 {
        font-size: 64px;
        margin-bottom: 24px;
        color: var(--text-white);
    }

    .contact-info p {
        color: var(--text-muted);
        font-size: 18px;
        margin-bottom: 48px;
        max-width: 500px;
    }

    .contact-methods {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .contact-method {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .method-icon {
        width: 52px;
        height: 52px;
        background: var(--primary);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: var(--text-dark);
    }

    .contact-method label {
        display: block;
        font-size: 14px;
        color: var(--text-muted);
        margin-bottom: 4px;
        font-weight: 500;
    }

    .contact-method p {
        margin-bottom: 0;
        color: var(--text-white);
        font-size: 18px;
        font-weight: 600;
    }

    .contact-card {
        flex: 1;
        background: #ffffff;
        padding: 48px;
        border-radius: 24px;
        box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form-group label {
        font-size: 14px;
        font-weight: 600;
        color: #333;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        padding: 14px 18px;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        background: #f8f9fa;
        font-family: var(--font-sans);
        font-size: 15px;
        color: #333;
        transition: all 0.2s;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary);
        background: #ffffff;
        box-shadow: 0 0 0 4px rgba(247, 198, 51, 0.1);
    }

    .form-group textarea {
        height: 120px;
        resize: none;
    }

    .btn-primary {
        background: var(--primary);
        color: var(--text-dark);
        padding: 0.8rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        background: var(--primary-hover);
    }

    .full-width {
        width: 100%;
        justify-content: center;
        padding: 18px;
        font-size: 16px;
    }

    @media (max-width: 1024px) {
        .contact-container {
            flex-direction: column;
            gap: 60px;
        }
        .contact-card {
            width: 100%;
        }
        .contact-info h2 {
            font-size: 48px;
        }
    }
  `]
})
export class ContactComponent { }
