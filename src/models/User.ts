import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface userProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<userProps> {
  static buildUser(attrs: userProps): User {
    return new User(
      new Attributes<userProps>(attrs),
      new Eventing(),
      new ApiSync<userProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, userProps> {
    return new Collection<User, userProps>(rootUrl, (json: userProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
