/*
 * GET users listing.
 */

exports.list = function(req, res){

  console.log("list");

  //console.log(req);
  //console.log(res);

  console.log(req.body);

    var input = JSON.parse(JSON.stringify(req.body));
    
    console.log(input);
    //console.log(movieName);

  req.getConnection(function(err,connection){
  
        var data = {
            
            address    : input.name,
            bedroomCount : parseInt(input.bedroomCount, 10) || 0,
            bathroomCount : parseInt(input.bathroomCount, 10) || 0,
            minRent : parseInt(input.minRent, 10) || 0,
            maxRent : parseInt(input.maxRent, 10) || 0
        
        };

        var query = connection.query("CALL SearchRentals(?,?,?,?,?)",[data.address, data.bedroomCount, data.bathroomCount, data.minRent, data.maxRent],function(err, rentals)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
              res.json({
                  rentals: rentals
              });
            //res.render('partials/moviesView',{page_title:"Movies - Node.js",movies:rows});
                
           
         });
         
         console.log(query.sql);
    });
  
};

exports.add = function(req, res){
  res.render('add_rental',{page_title:"Add Rental Property"});
};

exports.getCommercial = function(req, res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    req.getConnection(function(err,connection){
    
        var data = {
            
            id    : input.id
        
        };

        var query = connection.query('SELECT * FROM Commercial WHERE commercialID = ?',data.id,function(err,rental)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
                res.json({
                  rental: rental
                });
            //res.render('edit_movie',{page_title:"Edit Movies - Node.js",data:rows});
                
           
         });
  

         //console.log(query.sql);
    }); 
};

exports.getCommercialAttachments = function(req, res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    req.getConnection(function(err,connection){
    
        var data = {
            
            id    : input.id
        
        };
   
        var query = connection.query('SELECT * FROM Attachment WHERE commercialID = ?',data.id,function(err,attachment)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
                res.json({
                  attachment: attachment
                });
            //res.render('edit_movie',{page_title:"Edit Movies - Node.js",data:rows});
                
           
         });

         //console.log(query.sql);
    }); 
};

exports.getResidential = function(req, res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    req.getConnection(function(err,connection){
    
        var data = {
            
            id    : input.id
        
        };

        var query = connection.query('SELECT * FROM Residential WHERE residentialID = ?',data.id,function(err,rental)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
                res.json({
                  rental: rental
                });
            //res.render('edit_movie',{page_title:"Edit Movies - Node.js",data:rows});
                
           
         });

         //console.log(query.sql);
    }); 
};

exports.getResidentialAttachments = function(req, res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    req.getConnection(function(err,connection){
    
        var data = {
            
            id    : input.id
        
        };
  
        var query = connection.query('SELECT * FROM Attachment WHERE residentialID = ?',data.id,function(err,attachment)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
                res.json({
                  rental: rental,
                  attachment: attachment
                });
            //res.render('edit_movie',{page_title:"Edit Movies - Node.js",data:rows});
                
           
         });

         //console.log(query.sql);
    }); 
};

exports.getStorage = function(req, res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    req.getConnection(function(err,connection){
    
        var data = {
            
            id    : input.id
        
        };

        var query = connection.query('SELECT * FROM Storage WHERE storageID = ?',data.id,function(err,rental)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
                res.json({
                  rental: rental
                });
            //res.render('edit_movie',{page_title:"Edit Movies - Node.js",data:rows});
                
           
         });

         //console.log(query.sql);
    }); 
};

exports.getStorageAttachments = function(req, res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    console.log(input);
    req.getConnection(function(err,connection){
    
        var data = {
            
            id    : input.id
        
        };
 
        var query = connection.query('SELECT * FROM Attachment WHERE storageID = ?',data.id,function(err,attachment)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
            else
                res.json({
                  rental: rental,
                  attachment: attachment
                });
            //res.render('edit_movie',{page_title:"Edit Movies - Node.js",data:rows});
                
           
         });

         //console.log(query.sql);
    }); 
};

/*Save the customer*/
exports.saveCommercial = function(req,res){
 
  console.log(req);
  console.log(res);

    var input = JSON.parse(JSON.stringify(req.body));
    
    console.log(input);

    req.getConnection(function (err, connection) {
        
        var data = {
            
            address    : input.address,
            city  : input.city,
            state : input.state,
            zip : input.zip,
            rentAmt : input.rentAmt,
            description : input.description
        
        };
        
        var query = connection.query("INSERT INTO Commercial set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
          else {
            console.log(rows);

            res.json({
                id: rows.insertId
            });
          }
          
        });
        
        //res.redirect('/rentalsService');
        console.log(query.sql); //get raw query
    
    });
};

/*Save the customer*/
exports.saveResidential = function(req,res){
 
  console.log(req);
  console.log(res);

    var input = JSON.parse(JSON.stringify(req.body));
    
    console.log(input);

    req.getConnection(function (err, connection) {
        
        var data = {
            
            address    : input.address,
            city  : input.city,
            state : input.state,
            zip : input.zip,
            bedrooms : input.bedrooms,
            bathrooms : input.bathrooms,
            rentAmt : input.rentAmt,
            description : input.description
        
        };
        
        var query = connection.query("INSERT INTO Residential set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.id = rows.insertID;
          res.redirect('/rentalsService');
          
        });
        
        console.log(query.sql); //get raw query
    
    });
};

/*Save the customer*/
exports.saveStorage = function(req,res){
 
  console.log(req);
  console.log(res);

    var input = JSON.parse(JSON.stringify(req.body));
    
    console.log(input);

    req.getConnection(function (err, connection) {
        
        var data = {
            
            address    : input.address,
            city  : input.city,
            state : input.state,
            zip : input.zip,
            rentAmt : input.rentAmt,
            description : input.description
        
        };
        
        var query = connection.query("INSERT INTO Storage set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.id = rows.insertID;
          res.redirect('/rentalsService');
          
        });
        
        console.log(query.sql); //get raw query
    
    });
};

exports.save_editCommercial = function(req,res){

  //console.log(req);
  //console.log(res);
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = input.id;
    
    console.log("test");

    console.log(id);

    //console.log(input);

    req.getConnection(function (err, connection) {
        
        var data = {
            
            address    : input.address,
            city  : input.city,
            state : input.state,
            zip : input.zip,
            rentAmt : input.rentAmt,
            description : input.description
        
        };
        console.log(data);
        console.log(id);

        var query = connection.query("UPDATE Commercial set ? WHERE commercialID = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/rentalsService');
          
          console.log(rows); //get raw query
        });
        console.log(query.sql);
    });
};

exports.save_editResidential = function(req,res){

  //console.log(req);
  //console.log(res);
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = input.id;
    
    console.log("test");

    console.log(id);

    //console.log(input);

    req.getConnection(function (err, connection) {
        
        var data = {
            
            address    : input.address,
            city  : input.city,
            state : input.state,
            zip : input.zip,
            bedrooms : input.bedrooms,
            bathrooms : input.bathrooms,
            rentAmt : input.rentAmt,
            description : input.description
        
        };
        console.log(data);
        console.log(id);

        var query = connection.query("UPDATE Residential set ? WHERE residentialID = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/rentalsService');
          
          console.log(rows); //get raw query
        });
        console.log(query.sql);
    });
};

exports.save_editStorage = function(req,res){

  //console.log(req);
  //console.log(res);
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = input.id;
    
    console.log("test");

    console.log(id);

    //console.log(input);

    req.getConnection(function (err, connection) {
        
        var data = {
            
            address    : input.address,
            city  : input.city,
            state : input.state,
            zip : input.zip,
            rentAmt : input.rentAmt,
            description : input.description
        
        };
        console.log(data);
        console.log(id);

        var query = connection.query("UPDATE Storage set ? WHERE storageID = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/rentalsService');
          
          console.log(rows); //get raw query
        });
        console.log(query.sql);
    });
};

exports.delete_commercial = function(req,res){
          
     var input = JSON.parse(JSON.stringify(req.body));     
     var id = input.id;
    console.log("delete commercial");
    console.log(id);
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM Commercial WHERE commercialID = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/rentalsService');
             
        });
        
     });     
};

exports.delete_residential = function(req,res){
         
     var input = JSON.parse(JSON.stringify(req.body));     
     var id = input.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM Residential WHERE residentialID = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/rentalsService');
             
        });

     });
};

exports.delete_storage = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM Storage WHERE storageID = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/rentalsService');
             
        });
        
     });
};

/*Save the customer*/
exports.addCommercialAttachments = function(req,res){
 
    var input = JSON.parse(JSON.stringify(req.body));
    
    var async = require("async");
    req.getConnection(function (err, connection) {  

      async.forEachOf(input.files, function(file, arrIndex, callback){

          var data = {
              
              commercialID    : input.id,
              filePath : 'media/images/' + file
          
          };
          console.log("line 550");
            console.log(data);

          var query = connection.query("INSERT INTO Attachment set ? ",data, function(err, rows)
          {

            res.id = rows.insertID;
            if (err) {
                console.log("Error inserting : %s ",err );
                callback(err);
            } 
            else {
                callback(null);
            }
           
          });
      }, function(err){
        if(err){
          console.log("Error inserting : %s ",err );
        }else{
            res.redirect('/rentalsService');
        }
      });
        

    
    });


};

/*Save the customer*/
exports.addResidentialAttachments = function(req,res){
 
    var input = JSON.parse(JSON.stringify(req.body));
    
    var async = require("async");
    req.getConnection(function (err, connection) {  

      async.forEachOf(input.files, function(file, arrIndex, callback){

          var data = {
              
              residentialID    : input.id,
              filePath : 'media/images/' + file
          
          };
          console.log("line 550");
            console.log(data);

          var query = connection.query("INSERT INTO Attachment set ? ",data, function(err, rows)
          {

            res.id = rows.insertID;
            if (err) {
                console.log("Error inserting : %s ",err );
                callback(err);
            } 
            else {
                callback(null);
            }
           
          });
      }, function(err){
        if(err){
          console.log("Error inserting : %s ",err );
        }else{
            res.redirect('/rentalsService');
        }
      });
        

    
    });
};

/*Save the customer*/
exports.addStorageAttachments = function(req,res){
 
    var input = JSON.parse(JSON.stringify(req.body));
    
    var async = require("async");
    req.getConnection(function (err, connection) {  

      async.forEachOf(input.files, function(file, arrIndex, callback){

          var data = {
              
              storageID    : input.id,
              filePath : 'media/images/' + file
          
          };
          console.log("line 550");
            console.log(data);

          var query = connection.query("INSERT INTO Attachment set ? ",data, function(err, rows)
          {

            res.id = rows.insertID;
            if (err) {
                console.log("Error inserting : %s ",err );
                callback(err);
            } 
            else {
                callback(null);
            }
           
          });
      }, function(err){
        if(err){
          console.log("Error inserting : %s ",err );
        }else{
            res.redirect('/rentalsService');
        }
      });
        

    
    });
};

exports.deleteRentalAttachment = function(req,res){
 
  console.log(req);
  console.log(res);

    var input = JSON.parse(JSON.stringify(req.body));
    
    console.log(input);

    req.getConnection(function (err, connection) {
        
        
        var query = connection.query("DELETE FROM Attachment WHERE attachmentID =  ? ",input.attachmentID, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/rentalsService');
          
        });
        
        console.log(query.sql); //get raw query
    
    });
};

exports.deleteCommercialAttachments = function(req,res){
 
     var input = JSON.parse(JSON.stringify(req.body));
     var id = input.id;
    
     req.getConnection(function (err, connection) {

        connection.query("DELETE FROM Attachment WHERE commercialID = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/rentalsService');
             
        });
        
     });  
};

exports.deleteResidentialAttachments = function(req,res){
 
     var input = JSON.parse(JSON.stringify(req.body));
     var id = input.id;
    
     req.getConnection(function (err, connection) {

        connection.query("DELETE FROM Attachment WHERE residentialID = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/rentalsService');
             
        });
        
     });  
};

exports.deleteStorageAttachments = function(req,res){
 
     var input = JSON.parse(JSON.stringify(req.body));
     var id = input.id;
    
     req.getConnection(function (err, connection) {

        connection.query("DELETE FROM Attachment WHERE storageID = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/rentalsService');
             
        });
        
     });  
};

exports.savePassword = function(req,res){
 
    var crypto = require('crypto');
    var algorithm = 'aes-256-ctr';
    var password = 'ebonhawk';

    var input = JSON.parse(JSON.stringify(req.body));
    var L337 = input.L337;

  var cipher = crypto.createCipher(algorithm,password);
  var crypted = cipher.update(L337,'utf8','hex');
  crypted += cipher.final('hex');

     req.getConnection(function (err, connection) {

        connection.query("UPDATE K2S0 SET L337 = ?",[crypted], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/rentalsService');
             
        });
        
     });  
};

exports.login = function(req,res){
 
    var crypto = require('crypto');
    var algorithm = 'aes-256-ctr';
    var password = 'ebonhawk';

    var input = JSON.parse(JSON.stringify(req.body));
    var L337 = input.L337;

  var cipher = crypto.createCipher(algorithm,password);
  var crypted = cipher.update(L337,'utf8','hex');
  crypted += cipher.final('hex');

console.log(crypted);

     req.getConnection(function (err, connection) {

        connection.query("SELECT L337 FROM K2S0", function(err, row)
        {
            
             if(err) {
                 console.log("Error deleting : %s ",err );
              } else {
                console.log(row[0].L337);
                if (crypted == row[0].L337) {
                  res.json({
                      loginResponse: true
                  });
                } else {
                  res.json({
                      loginResponse: false
                  });
                }
              }
             
        });
        
     });  
};