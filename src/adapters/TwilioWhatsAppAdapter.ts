import { TargetNotificationService } from '../interfaces/TargetNotificationService.ts';
import { Invitacion } from '../models/Invitacion.ts';

export class TwilioWhatsAppAdapter implements TargetNotificationService {
  public async enviarInvitacion(invitacion: Invitacion): Promise<boolean> {
    const numeroFormateado = this.formatPhoneNumber(invitacion.datosSolicitante?.telefono || '');
    const mensaje = this.buildWhatsAppMessage(invitacion);
    
    // Aqui iria la logica del SDK de Twilio:
    // await twilioClient.messages.create({
    //   body: mensaje,
    //   from: 'whatsapp:+14155238886',
    //   to: `whatsapp:${numeroFormateado}`
    // });
    
    console.log(`[TwilioWhatsAppAdapter] Enviando WhatsApp a ${numeroFormateado}...`);
    console.log(`Mensaje:\n${mensaje}`);
    
    return true; // Simulacion de exito
  }

  private formatPhoneNumber(telefono: string): string {
    const numerosLimpios = telefono.replace(/\D/g, '');
    if (numerosLimpios.length === 10) {
      return `+52${numerosLimpios}`;
    }
    if (!numerosLimpios.startsWith('52') && numerosLimpios.length > 10) {
        return `+${numerosLimpios}`;
    }
    return `+${numerosLimpios}`;
  }

  private buildWhatsAppMessage(invitacion: Invitacion): string {
    const nombre = invitacion.datosSolicitante?.nombre;
    const evento = invitacion.infoEvento?.nombreEvento;
    const lugar = invitacion.logistica?.lugar;
    const fecha = invitacion.infoEvento?.fecha.toLocaleDateString();
    const hora = invitacion.logistica?.horaInicio;

    const textoBase = `Hola ${nombre}, te invitamos a ${evento} en ${lugar} el ${fecha} a las ${hora}.`;
    
    // Reducir texto al limite de caracteres
    if (textoBase.length > 1000) {
        return textoBase.substring(0, 997) + '...';
    }
    
    return textoBase;
  }
}
