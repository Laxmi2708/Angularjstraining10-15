var Authservice = /** @class */ (function () {
    function Authservice() {
        this.authUsers = [
            { email: 'laxmi27patil@gmail.com', password: "Pass@2708" },
            { email: ' abc@gmail.com ', password: "abc123" },
        ];
    }
    // Method to validate user credentials
    Authservice.prototype.validateUser = function (username, password) {
        var userFound = false;
        for (var _i = 0, _a = this.authUsers; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.email === username && user.password === password) {
                userFound = true;
                sessionStorage.setItem('auth', JSON.stringify(user));
                break; // Exit the loop once we find a match
            }
        }
        return userFound;
    };
    Authservice.prototype.getuserdetails = function () {
        var storedCart = sessionStorage.getItem('auth');
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        return []; // If no cart is stored, return an empty array
    };
    return Authservice;
}());

