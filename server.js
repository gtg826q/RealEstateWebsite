/*
This script depends on Node.js and Express
Install node.js form www.node.org

Install Express by Windows Command Prompt
Type "npm install Express"

BwyC?-iCX0G0
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var rentalsService = require('./routes/rentalsService'); 
var app = express();

var connection = require('express-myconnection'); 
var mysql      = require('mysql');

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

var FileUploadController = require('./routes/FileUploadController');

var cons = require('consolidate');

// all environments
app.set('port', process.env.PORT || 8000);
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

var db_config = {
  host: 'localhost',
  user     : 'root',
  password : 'mollymay',
  database : 'AmericanRealtyRentals'
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.post('/rentalsService/list', rentalsService.list);

app.post('/rentalsService/getCommercial', rentalsService.getCommercial);
app.post('/rentalsService/getResidential', rentalsService.getResidential);
app.post('/rentalsService/getStorage', rentalsService.getStorage);

app.post('/rentalsService/getCommercialAttachments', rentalsService.getCommercialAttachments);
app.post('/rentalsService/getResidentialAttachments', rentalsService.getResidentialAttachments);
app.post('/rentalsService/getStorageAttachments', rentalsService.getStorageAttachments);

app.post('/rentalsService/saveCommercial', rentalsService.saveCommercial);
app.post('/rentalsService/saveResidential', rentalsService.saveResidential);
app.post('/rentalsService/saveStorage', rentalsService.saveStorage);

app.post('/rentalsService/save_editCommercial', rentalsService.save_editCommercial);
app.post('/rentalsService/save_editResidential', rentalsService.save_editResidential);
app.post('/rentalsService/save_editStorage', rentalsService.save_editStorage);

app.post('/rentalsService/delete_commercial', rentalsService.delete_commercial);
app.post('/rentalsService/delete_residential', rentalsService.delete_residential);
app.post('/rentalsService/delete_storage', rentalsService.delete_storage);

app.post('/rentalsService/addCommercialAttachments', rentalsService.addCommercialAttachments);
app.post('/rentalsService/addResidentialAttachments', rentalsService.addResidentialAttachments);
app.post('/rentalsService/addStorageAttachments', rentalsService.addStorageAttachments);

app.post('/rentalsService/deleteCommercialAttachments', rentalsService.deleteCommercialAttachments);
app.post('/rentalsService/deleteResidentialAttachments', rentalsService.deleteResidentialAttachments);
app.post('/rentalsService/deleteStorageAttachments', rentalsService.deleteStorageAttachments);

app.post('/rentalsService/deleteRentalAttachment', rentalsService.deleteRentalAttachment);

app.post('/rentalsService/savePassword', rentalsService.savePassword);
app.post('/rentalsService/login', rentalsService.login);

app.post('/api/upload', multipartyMiddleware, FileUploadController.uploadFile);
app.post('/api/delete', multipartyMiddleware, FileUploadController.deleteFile);
app.post('/api/deleteAttachmentFile', multipartyMiddleware, FileUploadController.deleteAttachmentFile);

app.get('*', routes.index);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

