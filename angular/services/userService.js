 smartApp
     .factory('UserRepository',
         function(Restangular) {
          return Restangular.all('users/register');
         }
     )
     .factory('User', function(Restangular, AbstractRepository) {

         function CurrentRepository() {
             AbstractRepository.call(this, Restangular, 'users');
         }

         AbstractRepository.extend(CurrentRepository);
         return new CurrentRepository();

     })
     .factory('BannedUser', function(Restangular) {
             return Restangular.allUrl('banUser');
         })
     .factory('UnBannedUser', function(Restangular) {
         return Restangular.allUrl('unBanUser');
     })
     .factory('UserCreate', function(Restangular) {
         return Restangular.allUrl('userCreate');
     })
     .factory('CurrentUser', function(Restangular) {
         return Restangular.one('users/current');
     })
      .factory('SendPropertySaleRemindNotification', function(Restangular) {
         return Restangular.one('sendPropertySaleRemindNotification');
     })
     .factory('GetBillingData', function (Restangular) {
        return Restangular.allUrl('billinginfo');
    })
     .factory('SaveBillingData', function (Restangular) {
        return Restangular.allUrl('saveBillingData');
    })
    .factory('Welcome', function (Restangular) {
        return Restangular.allUrl('/welcome');
    })
    .factory('Students', function (Restangular) {
        return Restangular.allUrl('students');
    })
     
     .factory('cloudinaryInterceptor', function() {
         return {
             request: function(config){
                 var authHeader = config.headers('authorization');
                 //Check for the host
                 var regex = "https://diamatic.s3.us-east-2.amazonaws.com/8baec93b-cfcf-4bc1-9bfd-0ef206058c1d/Form/sample.json";
                 if(regex.test(config.url))
                 //Detach the header
                     delete config.headers.authorization;
                 return config;
             }
         }
     });
     

    
