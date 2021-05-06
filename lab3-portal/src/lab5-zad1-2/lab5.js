var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Role;
(function (Role) {
    Role["Standard"] = "standard";
    Role["Moderator"] = "moderator";
    Role["Admin"] = "admin";
})(Role || (Role = {}));
function StandardAccess(constructorFn) {
    constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn) {
    constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn) {
    constructorFn.prototype.role = Role.Admin;
}
function watch(target, propKey, descriptor) {
    var originalFn = target[propKey];
    descriptor.value = function (param) {
        console.log("Access method");
        return originalFn.call(this, param);
    };
}
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.toString = function () {
        return this.name + ", " + this.surname + ", " + this.role;
    };
    return User;
}());
var StandardUser = /** @class */ (function (_super) {
    __extends(StandardUser, _super);
    function StandardUser(name, surname) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    StandardUser = __decorate([
        StandardAccess
    ], StandardUser);
    return StandardUser;
}(User));
var ModeratorUser = /** @class */ (function (_super) {
    __extends(ModeratorUser, _super);
    function ModeratorUser(name, surname) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    ModeratorUser = __decorate([
        ModeratorAccess
    ], ModeratorUser);
    return ModeratorUser;
}(User));
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(name, surname) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.surname = surname;
        return _this;
    }
    AdminUser = __decorate([
        AdminAccess
    ], AdminUser);
    return AdminUser;
}(User));
var Resource = /** @class */ (function () {
    function Resource() {
        this.resourceValue = "secret";
    }
    Resource.prototype.read = function (user) {
        if (user.role === Role.Moderator || user.role === Role.Admin) {
            console.log("This value is " + this.resourceValue);
        }
        if (user.role === Role.Admin) {
            this.resourceValue = "Modified resource value";
            console.log("I modified resource value from secret to " + this.resourceValue);
        }
    };
    return Resource;
}());
var u1 = new StandardUser("Jan", "Kowalski");
var u2 = new ModeratorUser("Spider", "Man");
var u3 = new AdminUser("Iron", "Man");
var res = new Resource();
// console.log(u1.toString());
// console.log(u2);
// console.log(u3);
res.read(u1);
