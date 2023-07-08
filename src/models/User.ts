import { Eventing } from "./Eventing";

interface userProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: userProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: userProps): void {
    Object.assign(this.data, update);
  }
}
