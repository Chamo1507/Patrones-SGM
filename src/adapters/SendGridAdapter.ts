import { TargetNotificationService } from '../interfaces/TargetNotificationService.ts';
import { Invitacion } from '../models/Invitacion.ts';

export class SendGridAdapter implements TargetNotificationService {
  public async enviarInvitacion(invitacion: Invitacion): Promise<boolean> {
    const textBody = this.formatTextBody(invitacion);
    
    // Aqui iria la logica del SDK de SendGrid (enviando como texto plano):
    // await sgMail.send({
    //   to: invitacion.datosSolicitante?.email,
    //   from: 'no-reply@madero.com',
    //   subject: `Invitacion a: ${invitacion.infoEvento?.nombreEvento}`,
    //   text: textBody,
    // });
    
    console.log(`[SendGridAdapter] Enviando email a ${invitacion.datosSolicitante?.email}...`);
    console.log(`Cuerpo del Correo (Texto Plano):\n${textBody}`);
    
    return true; // Simulacion de exito
  }

  private formatTextBody(invitacion: Invitacion): string {
    return `Invitacion: ${invitacion.infoEvento?.nombreEvento}

Hola ${invitacion.datosSolicitante?.nombre},

Estas invitado a ${invitacion.infoEvento?.nombreEvento}.

Descripcion: 
${invitacion.infoEvento?.descripcion}

--- Detalles de Logistica ---
Lugar: ${invitacion.logistica?.lugar}
Fecha: ${invitacion.infoEvento?.fecha.toLocaleDateString()}
Horario: ${invitacion.logistica?.horaInicio} a ${invitacion.logistica?.horaFin}
`;
  }
}
