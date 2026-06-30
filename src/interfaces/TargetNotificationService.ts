import { Invitacion } from '../models/Invitacion.ts';

export interface TargetNotificationService {
  enviarInvitacion(invitacion: Invitacion): Promise<boolean>;
}
