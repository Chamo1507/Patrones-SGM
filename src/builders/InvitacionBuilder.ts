import { Invitacion, DatosSolicitante, InfoEvento, Logistica } from '../models/Invitacion.ts';

export class InvitacionBuilder {
  private invitacion: Invitacion;

  constructor() {
    this.invitacion = new Invitacion();
  }

  public setDatosSolicitante(datos: DatosSolicitante): this {
    this.invitacion.datosSolicitante = datos;
    return this;
  }

  public setInfoEvento(info: InfoEvento): this {
    this.invitacion.infoEvento = info;
    return this;
  }

  public setLogistica(logistica: Logistica): this {
    this.invitacion.logistica = logistica;
    return this;
  }

  public build(): Invitacion {
    if (!this.invitacion.datosSolicitante || !this.invitacion.datosSolicitante.nombre || !this.invitacion.datosSolicitante.email) {
      throw new Error("Datos obligatorios del solicitante faltantes.");
    }
    if (!this.invitacion.infoEvento || !this.invitacion.infoEvento.nombreEvento) {
      throw new Error("Datos obligatorios del evento faltantes.");
    }
    if (!this.invitacion.logistica || !this.invitacion.logistica.lugar) {
      throw new Error("Datos obligatorios de logistica faltantes.");
    }
    
    return this.invitacion;
  }
}
