import { Thread } from './thread';

export interface Wire {
  id?: string;
  serial: string;
  wiring: Thread[];
  createdAt?: Date;
}
