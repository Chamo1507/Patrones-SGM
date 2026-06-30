export interface DatosSolicitante {
  nombre: string;
  email: string;
  telefono: string;
}

export interface InfoEvento {
  nombreEvento: string;
  descripcion: string;
  fecha: Date;
}

export interface Logistica {
  lugar: string;
  horaInicio: string;
  horaFin: string;
}

export class Invitacion {
  datosSolicitante?: DatosSolicitante;
  infoEvento?: InfoEvento;
  logistica?: Logistica;

  constructor() {}
}
