import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "NAME", age: 20 });
const userForm = new UserForm(
  document.getElementById("root") as HTMLElement,
  user
);
userForm.render();
