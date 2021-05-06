enum Role {
  Standard = "standard",
  Moderator = "moderator",
  Admin = "admin",
}

function StandardAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Admin;
}

function watch(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = target[propKey];
  descriptor.value = function (param) {
    console.log("Access method");
    return originalFn.call(this, param);
  };
}

class User {
  name: string;
  surname: string;
  role: Role;
  toString(): string {
    return `${this.name}, ${this.surname}, ${this.role}`;
  }
}

@StandardAccess
class StandardUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}

@ModeratorAccess
class ModeratorUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}

@AdminAccess
class AdminUser extends User {
  constructor(name: string, surname: string) {
    super();
    this.name = name;
    this.surname = surname;
  }
}

class Resource {
  private resourceValue: string;
  constructor() {
    this.resourceValue = "secret";
  }
  public read(user: User): void {
    if (user.role === Role.Moderator || user.role === Role.Admin) {
      console.log(`This value is ${this.resourceValue}`);
    }
    if (user.role === Role.Admin) {
      this.resourceValue = "Modified resource value";
      console.log(
        `I modified resource value from secret to ${this.resourceValue}`
      );
    }
  }
}

const u1 = new StandardUser("Jan", "Kowalski");
const u2 = new ModeratorUser("Spider", "Man");
const u3 = new AdminUser("Iron", "Man");
const res = new Resource();

// console.log(u1.toString());
// console.log(u2);
// console.log(u3);

res.read(u1);
