import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Check if Resend API key is configured
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey || apiKey === 're_YOUR_API_KEY_HERE') {
            // Fallback: Log the message (for development/testing)
            console.log('Contact form submission:', { name, email, subject, message });
            return NextResponse.json({
                success: true,
                message: 'Message received (email not configured yet)'
            });
        }

        // Dynamically import Resend only when API key is available
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Wild Canvas Contact <onboarding@resend.dev>',
            to: ['ameeyadav200@gmail.com'],
            subject: subject || `New Contact from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #F4C542;">New Contact Form Submission</h2>
                    <hr style="border: 1px solid #eee;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
                    <h3>Message:</h3>
                    <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${message}</p>
                    <hr style="border: 1px solid #eee;">
                    <p style="color: #666; font-size: 12px;">This email was sent from the Wild Canvas website contact form.</p>
                </div>
            `,
            replyTo: email,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
