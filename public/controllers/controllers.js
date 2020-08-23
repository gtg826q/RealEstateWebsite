'use strict';

/* Controllers */

rentalApp.controller('IndexCtrl', ['$scope', 'rentalFac', function ($scope, rentalFac) {
  
    $scope.searchRentals = function(rental) {

        rentalFac.searchRentals(rental).then(function(response){
        $scope.rentals = response.data;

      });
    };

}]);

rentalApp.controller('PublicViewCtrl', ['$scope', 'rentalFac', function ($scope, rentalFac) {
  
    $scope.searchRentals = function(rental) {
console.log("test");
        rentalFac.searchRentals(rental).then(function(response){
        $scope.rentals = response.data;

      });
    };

}]);

rentalApp.controller('AddCommercialCtrl', ['$scope', 'rentalFac', '$location', '$window', 'Upload', function ($scope, rentalFac, $location, $window, Upload) {

    $scope.addNewCommercial = function(commercial) {
        rentalFac.addCommercial(commercial).then(function(response){
          rentalFac.addCommercialAttachments(response.data.id, $scope.files);
          alert("Listing added successfully");
          $window.location.href = '#/rentalsView'
        });
        
    };

    $scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: 'api/upload', 
                method: 'POST',
                data: {file: file},
                file: file
            }).then(function (response) {
                file.result = response.data;
                console.log("timeout");
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });

        });
    };  

    $scope.deleteFile = function(idx) {
         var file = $scope.files[idx];
         if (file.progress == 100) {
            file.upload = Upload.upload({
                url: 'api/delete', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            $scope.files.splice(idx, 1);
          } else {
               $scope.files.splice(idx, 1);
          }
    };

    $scope.isImage = function(ext) {
      var isImageResult = rentalFac.isImage(ext);  
      return isImageResult;

    };

}]);

rentalApp.controller('AddResidentialCtrl', ['$scope', 'rentalFac', '$location', '$window', 'Upload', function ($scope, rentalFac, $location, $window, Upload) {

    $scope.addNewResidential = function(residential) {
        rentalFac.addResidential(residential).then(function(response){
          rentalFac.addResidentialAttachments(response.data.id, $scope.files);
          alert("Listing added successfully");
          $window.location.href = '#/rentalsView'
        });
        
    };

    $scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: 'api/upload', 
                method: 'POST',
                data: {file: file},
                file: file
            }).then(function (response) {
                file.result = response.data;
                console.log("timeout");
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });

        });
    };  

    $scope.deleteFile = function(idx) {
         var file = $scope.files[idx];
         if (file.progress == 100) {
            file.upload = Upload.upload({
                url: 'api/delete', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            $scope.files.splice(idx, 1);
          } else {
               $scope.files.splice(idx, 1);
          }
    };

    $scope.isImage = function(ext) {
      var isImageResult = rentalFac.isImage(ext);  
      return isImageResult;

    };

}]);

rentalApp.controller('AddStorageCtrl', ['$scope', 'rentalFac', '$location', '$windnow', 'Upload', function ($scope, rentalFac, $location, $window, Upload) {

    $scope.addNewStorage = function(storage) {
        rentalFac.addStorage(storage).then(function(response){
          rentalFac.addStorageAttachments(response.data.id, $scope.files);
          alert("Listing added successfully");
          $window.location.href = '#/rentalsView'
        });
        
    };

    $scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: 'api/upload', 
                method: 'POST',
                data: {file: file},
                file: file
            }).then(function (response) {
                file.result = response.data;
                console.log("timeout");
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });

        });
    };  

    $scope.deleteFile = function(idx) {
         var file = $scope.files[idx];
         if (file.progress == 100) {
            file.upload = Upload.upload({
                url: 'api/delete', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            $scope.files.splice(idx, 1);
          } else {
               $scope.files.splice(idx, 1);
          }
    };

    $scope.isImage = function(ext) {
      var isImageResult = rentalFac.isImage(ext);  
      return isImageResult;

    };

}]);

rentalApp.controller('EditCommercialCtrl', ['$scope', 'rentalFac', '$location', '$routeParams', '$window', 'Upload', function ($scope, rentalFac, $location, $routeParams, $window, Upload) {
    $scope.id = $location.search().commercialID;

    $scope.init = function(id)
    {
      
      rentalFac.getCommercial(id).then(function(response){
        $scope.Commercial = {id: response.data.rental[0].commercialID,
                        address: response.data.rental[0].address,
                        city: response.data.rental[0].city,
                        state: response.data.rental[0].state,
                        zip: response.data.rental[0].zip,
                        rentAmt: response.data.rental[0].rentAmt,
                        description: response.data.rental[0].description}

      });

      rentalFac.getCommercialAttachments(id).then(function(response){

        $scope.CommercialAttachment = response.data.attachment;

      });      
    };

    $scope.init($scope.id);

    $scope.editRental = function(rental) {
        
          rentalFac.editCommercialRental(rental).then(function(response){
            rentalFac.addCommercialAttachments($scope.id, $scope.files);
            alert("Commercial rental updated successfully");
            $window.location.href = '#/rentalsView'
          });

    };

    $scope.deleteRental = function(rental) {
        if (confirm("Are you sure you want to delete this listing?")) {
          rentalFac.deleteCommercial(rental).then(function(response){
            rentalFac.deleteCommercialAttachments($scope.id);
            alert("Commercial rental deleted successfully");
            $window.location.href = '#/rentalsView'
          });
        }
    };   

    $scope.deleteRentalAttachment = function(file, index) {
        if (confirm("Are you sure you want to delete this file?")) {
          rentalFac.deleteRentalAttachment(file).then(function(response){
            $scope.deleteAttachmentFile(file);
            $scope.CommercialAttachment.splice(index, 1);
            alert("File deleted successfully");
          });
        }
    };       

    $scope.deleteAttachmentFile = function(file) {

            file.upload = Upload.upload({
                url: 'api/deleteAttachmentFile', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            
    };

    $scope.uploadFiles = function(files, errFiles) {

        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: 'api/upload', 
                method: 'POST',
                data: {file: file},
                file: file
            }).then(function (response) {
                file.result = response.data;
                console.log("timeout");
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });

        });
    };  

    $scope.deleteFile = function(idx) {
         var file = $scope.files[idx];
         if (file.progress == 100) {
            file.upload = Upload.upload({
                url: 'api/delete', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            $scope.files.splice(idx, 1);
          } else {
               $scope.files.splice(idx, 1);
          }
    };

    $scope.isImage = function(ext) {
      var isImageResult = rentalFac.isImage(ext);  
      return isImageResult;

    };        

}]);

rentalApp.controller('EditResidentialCtrl', ['$scope', 'rentalFac', '$location', '$routeParams', '$window', 'Upload', function ($scope, rentalFac, $location, $routeParams, $window, Upload) {
    $scope.id = $location.search().commercialID;

    $scope.init = function(id)
    {
      
      rentalFac.getResidential(id).then(function(response){
        $scope.Residential = {id: response.data.rental[0].residentialID,
                        address: response.data.rental[0].address,
                        city: response.data.rental[0].city,
                        state: response.data.rental[0].state,
                        zip: response.data.rental[0].zip,
                        bedrooms: response.data.rental[0].bedrooms,
                        bathrooms: response.data.rental[0].bathrooms,
                        rentAmt: response.data.rental[0].rentAmt,
                        description: response.data.rental[0].description}

      });

      rentalFac.getResidentialAttachments(id).then(function(response){

        $scope.ResidentialAttachment = response.data.attachment;

      });      
    };

    $scope.init($scope.id);

    $scope.editRental = function(rental) {
        
          rentalFac.editResidentialRental(rental).then(function(response){
            rentalFac.addResidentialAttachments($scope.id, $scope.files);
            alert("Residential rental updated successfully");
            $window.location.href = '#/rentalsView'
          });

    };

    $scope.deleteRental = function(rental) {
        if (confirm("Are you sure you want to delete this listing?")) {
          rentalFac.deleteResidential(rental).then(function(response){
            rentalFac.deleteResidentialAttachments($scope.id);
            alert("Residential rental deleted successfully");
            $window.location.href = '#/rentalsView'
          });
        }
    };   

    $scope.deleteRentalAttachment = function(file, index) {
        if (confirm("Are you sure you want to delete this file?")) {
          rentalFac.deleteRentalAttachment(file).then(function(response){
            $scope.deleteAttachmentFile(file);
            $scope.ResidentialAttachment.splice(index, 1);
            alert("File deleted successfully");
          });
        }
    };       

    $scope.deleteAttachmentFile = function(file) {

            file.upload = Upload.upload({
                url: 'api/deleteAttachmentFile', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            
    };

    $scope.uploadFiles = function(files, errFiles) {

        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: 'api/upload', 
                method: 'POST',
                data: {file: file},
                file: file
            }).then(function (response) {
                file.result = response.data;
                console.log("timeout");
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });

        });
    };  

    $scope.deleteFile = function(idx) {
         var file = $scope.files[idx];
         if (file.progress == 100) {
            file.upload = Upload.upload({
                url: 'api/delete', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            $scope.files.splice(idx, 1);
          } else {
               $scope.files.splice(idx, 1);
          }
    };

    $scope.isImage = function(ext) {
      var isImageResult = rentalFac.isImage(ext);  
      return isImageResult;

    };       

}]);

rentalApp.controller('EditStorageCtrl', ['$scope', 'rentalFac', '$location', '$routeParams', '$window', 'Upload', function ($scope, rentalFac, $location, $routeParams, $window, Upload) {
    $scope.id = $location.search().commercialID;

    $scope.init = function(id)
    {
      
      rentalFac.getStorage(id).then(function(response){
        $scope.Storage = {id: response.data.rental[0].commercialID,
                        address: response.data.rental[0].address,
                        city: response.data.rental[0].city,
                        state: response.data.rental[0].state,
                        zip: response.data.rental[0].zip,
                        rentAmt: response.data.rental[0].rentAmt,
                        description: response.data.rental[0].description}

      });

      rentalFac.getStorageAttachments(id).then(function(response){

        $scope.StorageAttachment = response.data.attachment;

      });      
    };

    $scope.init($scope.id);

    $scope.editRental = function(rental) {
        
          rentalFac.editStorageRental(rental).then(function(response){
            rentalFac.addStorageAttachments($scope.id, $scope.files);
            alert("Commercial rental updated successfully");
            $window.location.href = '#/rentalsView'
          });

    };

    $scope.deleteRental = function(rental) {
        if (confirm("Are you sure you want to delete this listing?")) {
          rentalFac.deleteStorage(rental).then(function(response){
            rentalFac.deleteStorageAttachments($scope.id);
            alert("Storage rental deleted successfully");
            $window.location.href = '#/rentalsView'
          });
        }
    };   

    $scope.deleteRentalAttachment = function(file, index) {
        if (confirm("Are you sure you want to delete this file?")) {
          rentalFac.deleteRentalAttachment(file).then(function(response){
            $scope.deleteAttachmentFile(file);
            $scope.StorageAttachment.splice(index, 1);
            alert("File deleted successfully");
          });
        }
    };       

    $scope.deleteAttachmentFile = function(file) {

            file.upload = Upload.upload({
                url: 'api/deleteAttachmentFile', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            
    };

    $scope.uploadFiles = function(files, errFiles) {

        $scope.files = files;
        $scope.errFiles = errFiles;
        angular.forEach(files, function(file) {
            file.upload = Upload.upload({
                url: 'api/upload', 
                method: 'POST',
                data: {file: file},
                file: file
            }).then(function (response) {
                file.result = response.data;
                console.log("timeout");
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });

        });
    };  

    $scope.deleteFile = function(idx) {
         var file = $scope.files[idx];
         if (file.progress == 100) {
            file.upload = Upload.upload({
                url: 'api/delete', 
                method: 'POST',
                data: {file: file},
                file: file
            });
            $scope.files.splice(idx, 1);
          } else {
               $scope.files.splice(idx, 1);
          }
    };

    $scope.isImage = function(ext) {
      var isImageResult = rentalFac.isImage(ext);  
      return isImageResult;

    };       

}]);

rentalApp.controller('ChangePwdCtrl', ['$scope', 'rentalFac', '$window', function ($scope, rentalFac, $window) {
  
    $scope.savePassword = function(T3M4) {

      if ($scope.checkPassword(T3M4)) {
          rentalFac.savePassword(T3M4).then(function(response){
            alert("Password changed successfully.");
            $window.location.href = '#/rentalsView'

        });
      } else {
        alert("Password is invalid");
      }
    };

    $scope.checkPassword = function(T3M4) {
      console.log("test");
      if (/[a-z]/.test(T3M4.HK47) && /[A-Z]/.test(T3M4.HK47) && T3M4.HK47.length >= 8 && /[0-9]/.test(T3M4.HK47)) {
        return true;
      } else {
        return false;
      }
    };

}]);

rentalApp.controller('LoginCtrl', ['$scope', 'rentalFac', '$window', function ($scope, rentalFac, $window) {
  
    $scope.login = function(T3M4) {


          rentalFac.login(T3M4).then(function(response){
            if (response.data.loginResponse == true) {
              $window.location.href = '#/rentalsView'
            } else {
              alert("Invalid Password");
            }

        });

      }; 




}]);

rentalApp.controller('ViewCommercialCtrl', ['$scope', 'rentalFac', '$location', function ($scope, rentalFac, $location) {
    $scope.id = $location.search().commercialID;

    $scope.init = function(id)
    {
      
      rentalFac.getCommercial(id).then(function(response){

        $scope.Commercial = {id: response.data.rental[0].commercialID,
                        address: response.data.rental[0].address,
                        city: response.data.rental[0].city,
                        state: response.data.rental[0].state,
                        zip: response.data.rental[0].zip,
                        rentAmt: response.data.rental[0].rentAmt,
                        description: response.data.rental[0].description}

      });

      rentalFac.getCommercialAttachments(id).then(function(response){

        $scope.CommercialAttachment = response.data.attachment;

      });      
    };

    $scope.init($scope.id);
}]);

rentalApp.controller('ViewResidentialCtrl', ['$scope', 'rentalFac', '$location', function ($scope, rentalFac, $location) {
    $scope.id = $location.search().commercialID;

    $scope.init = function(id)
    {
      
      rentalFac.getResidential(id).then(function(response){
        $scope.Residential = {id: response.data.rental[0].residentialID,
                        address: response.data.rental[0].address,
                        city: response.data.rental[0].city,
                        state: response.data.rental[0].state,
                        zip: response.data.rental[0].zip,
                        bedrooms: response.data.rental[0].bedrooms,
                        bathrooms: response.data.rental[0].bathrooms,
                        rentAmt: response.data.rental[0].rentAmt,
                        description: response.data.rental[0].description}

      });

      rentalFac.getResidentialAttachments(id).then(function(response){

        $scope.ResidentialAttachment = response.data.attachment;

      });      
    };

    $scope.init($scope.id);
}]);

rentalApp.controller('ViewStorageCtrl', ['$scope', 'rentalFac', '$location', function ($scope, rentalFac, $location) {
   $scope.id = $location.search().commercialID;

    $scope.init = function(id)
    {
      
      rentalFac.getStorage(id).then(function(response){
        $scope.Storage = {id: response.data.rental[0].commercialID,
                        address: response.data.rental[0].address,
                        city: response.data.rental[0].city,
                        state: response.data.rental[0].state,
                        zip: response.data.rental[0].zip,
                        rentAmt: response.data.rental[0].rentAmt,
                        description: response.data.rental[0].description}

      });

      rentalFac.getStorageAttachments(id).then(function(response){

        $scope.StorageAttachment = response.data.attachment;

      });      
    };

    $scope.init($scope.id);
}]);
