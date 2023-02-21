import { Indicator } from '../enumeration/indicator';

export interface Led {
  indicator: Indicator;
  on: boolean;
}
