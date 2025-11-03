
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

    try {
        const { name, message, email } = await request.json();

        if( !name || !message || !email ) {
            return Response.json({ error: 'Campos obligatorios', status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: `Portafolio <${process.env.RESEND_FROM_EMAIL}>`,
            to: 'ceau922@gmail.com',
            subject: 'Nuevo mensaje de ' + name,
            react: EmailTemplate({ name, message, email }),
        });

        if (error) {
            return Response.json({ error });
        }

        return Response.json(data);

    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ error: 'Error al enviar el correo', status: 500 });
    }

}