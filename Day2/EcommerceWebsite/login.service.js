
authmodule.service('loginService', function($q) {
    this.validateUser = function(user) {
        var deferred = $q.defer();
  
        debugger
        
        setTimeout(function() {
            var validCredentials = [
                { emailid: 'laxmi@gmail.com', password: '123456' },
                { emailid: 'laxmi2708@gmail.com', password: 'Pass22708' },
                { emailid: 'user3@example.com', password: 'password789' }
            ];

            var isValid = validCredentials.some(function(cred) {
                return cred.emailid === user.emailid && cred.password === user.password;
            });

            if (isValid) {
                deferred.resolve({ message: 'Login successful' });
            } else {
                deferred.reject({ message: 'Invalid credentials' });
            }
        }, 1000);

        return deferred.promise;
    };
});


    
   