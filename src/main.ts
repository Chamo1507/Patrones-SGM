import { InvitacionBuilder } from './builders/InvitacionBuilder.ts';
import { SendGridAdapter } from './adapters/SendGridAdapter.ts';
import { TwilioWhatsAppAdapter } from './adapters/TwilioWhatsAppAdapter.ts';

async function main() {
    console.log("=== Iniciando prueba de creacion y envio de invitaciones ===\n");

    try {
        // 1. Construir la invitacion usando el Builder
        console.log("-> Construyendo invitacion...");
        const builder = new InvitacionBuilder();
        
        const invitacion = builder
            .setDatosSolicitante({
                nombre: "Samuel Ramirez Bueno",
                email: "samuel-ramirez@umad.edu.mx",
                telefono: "5512345678"
            })
            .setInfoEvento({
                nombreEvento: "Lanzamiento de Sistema Madero",
                descripcion: "Presentacion de la nueva arquitectura de software.",
                fecha: new Date("2026-07-15T00:00:00")
            })
            .setLogistica({
                lugar: "Auditorio Principal, Torre Centro",
                horaInicio: "18:00",
                horaFin: "21:00"
            })
            .build();

        console.log("Invitacion construida exitosamente.\n");

        // 2. Probar los Adaptadores (TargetNotificationService)
        console.log("-> Probando Adaptadores de Mensajeria...");
        
        const sendGridAdapter = new SendGridAdapter();
        const whatsappAdapter = new TwilioWhatsAppAdapter();

        console.log("\n--- Prueba con SendGrid (Email) ---");
        await sendGridAdapter.enviarInvitacion(invitacion);

        console.log("\n--- Prueba con Twilio (WhatsApp) ---");
        await whatsappAdapter.enviarInvitacion(invitacion);

        console.log("\n=== Prueba finalizada con exito ===");

    } catch (error: any) {
        console.error("Error durante la prueba:", error.message);
    }
}

main();
