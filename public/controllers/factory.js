rentalApp.factory("rentalFac", ['$http',function($http){  
    var obj = {};
   
    obj.searchRentals = function(rental){
        return $http.post('/rentalsService/list', rental).success(function(response) {
            console.log(response);
            return response.data;
        });  
    }

    obj.addCommercial = function(commercial){
    	return $http.post('/rentalsService/saveCommercial', commercial).success(function(data){
         console.log(data);
         return data;
        });
    }

    obj.addResidential = function(residential){
        return $http.post('/rentalsService/saveResidential', residential).success(function(data){
         console.log(data);
         return data;
        });
    }

    obj.addStorage = function(storage){
        return $http.post('/rentalsService/saveStorage', storage).success(function(data){
         console.log(data);
         return data;
        });
    }        
    
    obj.getCommercial = function(id){
        console.log(id);
        var input = {id: id};
        return $http.post('/rentalsService/getCommercial', input).success(function(data){
            return data;
        });
    }

    obj.getResidential = function(id){
        console.log(id);
        var input = {id: id};
        return $http.post('/rentalsService/getResidential', input).success(function(data){
            return data;
        });
    }

    obj.getStorage = function(id){
        console.log(id);
        var input = {id: id};
        return $http.post('/rentalsService/getStorage', input).success(function(data){
            return data;
        });
    }  

    obj.getCommercialAttachments = function(id){
        console.log(id);
        var input = {id: id};
        return $http.post('/rentalsService/getCommercialAttachments', input).success(function(data){
            return data;
        });
    }

    obj.getResidentialAttachments = function(id){
        console.log(id);
        var input = {id: id};
        return $http.post('/rentalsService/getResidentialAttachments', input).success(function(data){
            return data;
        });
    }

    obj.getStorageAttachments = function(id){
        console.log(id);
        var input = {id: id};
        return $http.post('/rentalsService/getStorageAttachments', input).success(function(data){
            return data;
        });
    }            

    obj.editCommercialRental = function(rental){
        return $http.post('/rentalsService/save_editCommercial', rental).success(function(data){
         console.log(data);
         return data;
        });
    }

    obj.editResidentialRental = function(rental){
        return $http.post('/rentalsService/save_editResidential', rental).success(function(data){
         console.log(data);
         return data;
        });
    }
   
    obj.editStorageRental = function(rental){
        return $http.post('/rentalsService/save_editStorage', rental).success(function(data){
         console.log(data);
         return data;
        });
    }     

    obj.deleteCommercial = function(rental){
        console.log(rental);
        return $http.post('/rentalsService/delete_commercial', rental).success(function(data){
         console.log(data);
         return data;
        });        
    } 

    obj.deleteResidential = function(rental){
        return $http.post('/rentalsService/delete_residential', rental).success(function(data){
         console.log(data);
         return data;
        });        
    } 

    obj.deleteStorage = function(rental){
        return $http.post('/rentalsService/delete_storage', rental).success(function(data){
         console.log(data);
         return data;
        });        
    }            

    obj.addCommercialAttachments = function(id, files) {
        console.log(files);
        var fileNameArr = [];
        for (var i = 0; i < files.length; i++) {
            fileNameArr[i] = files[i].name;
        };
        var input = {id: id,
                    files: fileNameArr};
        console.log(input);
        return $http.post('/rentalsService/addCommercialAttachments', input).success(function(data){
         console.log(data);
         return data;
        });          
    }

    obj.addResidentialAttachments = function(id, files) {
        var fileNameArr = [];
        for (var i = 0; i < files.length; i++) {
            fileNameArr[i] = files[i].name;
        };
        var input = {id: id,
                    files: fileNameArr};        
        return $http.post('/rentalsService/addResidentialAttachments', id, files).success(function(data){
         console.log(data);
         return data;
        });          
    }

    obj.addStorageAttachments = function(id, files) {
        var fileNameArr = [];
        for (var i = 0; i < files.length; i++) {
            fileNameArr[i] = files[i].name;
        };
        var input = {id: id,
                    files: fileNameArr};        
        return $http.post('/rentalsService/addStorageAttachments', id, files).success(function(data){
         console.log(data);
         return data;
        });          
    }       

    obj.deleteRentalAttachment = function(file) {
        return $http.post('/rentalsService/deleteRentalAttachment', file).success(function(data){
            console.log(data);
            return data;
        });
    } 

    obj.deleteCommercialAttachments = function(id) {
        var input = {id: id};
        console.log(input);
        return $http.post('/rentalsService/deleteCommercialAttachments', input).success(function(data){
            console.log(data);
            return data;
        });
    }     

    obj.deleteResidentialAttachments = function(id) {
        var input = {id: id};
        return $http.post('/rentalsService/deleteResidentialAttachments', input).success(function(data){
            console.log(data);
            return data;
        });
    }     

    obj.deleteStorageAttachments = function(id) {
        var input = {id: id};
        return $http.post('/rentalsService/deleteStorageAttachments', input).success(function(data){
            console.log(data);
            return data;
        });
    }         

    obj.isImage = function(fileName) {
        console.log(fileName);
        var ext = fileName.split(".").pop();
          if(ext) {
            console.log("test");
            return ext == "jpg" || ext == "jpeg"|| ext == "gif" || ext=="png"
          }
    };       


     obj.savePassword = function(T3M4) {
        var input = {L337: T3M4.HK47};
        return $http.post('/rentalsService/savePassword', input).success(function(data){
            console.log(data);
            return data;
        });
    };  

     obj.login = function(T3M4) {
        var input = {L337: T3M4.HK47};
        return $http.post('/rentalsService/login', input).success(function(data){
            console.log(data);
            return data;
        });
    };    

 return obj;      
}]);