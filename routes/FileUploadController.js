

exports.uploadFile = function(req, res) {
  /**
   * The following takes the blob uploaded to an arbitrary location with
   * a random file name and copies it to the specified file.path with the file.name.
   * Note that the file.name should come from your upload request on the client side
   * because when the file is selected it is paired with its name. The file.name is
   * not random nor is the file.path.
   */
console.log("uploadFile");
console.log(req.files);
  var fs = require("fs"); 
  var file = req.files.file;
  fs.readFile(req.files.file.path, function (err, data) {
    // set the correct path for the file not the temporary one from the API:
    console.log(data);
    file.path = "public/media/images/" + file.name;

    // copy the data from the req.files.file.path and paste it to file.path
    fs.writeFile(file.path, data, function (err) {
      if (err) {
        return console.warn(err);
      } else {
        res.json({
          data: data,
          status: 1
        })
        console.log("The file: " + file.name + " was saved to " + file.path);
      }
    });
  });
};

exports.deleteFile = function(req, res) {
  /**
   * The following takes the blob uploaded to an arbitrary location with
   * a random file name and copies it to the specified file.path with the file.name.
   * Note that the file.name should come from your upload request on the client side
   * because when the file is selected it is paired with its name. The file.name is
   * not random nor is the file.path.
   */
console.log("deleteFile");
console.log(req.files);
  var fs = require("fs"); 
  var file = req.files.file;   
  fs.readFile(req.files.file.path, function (err, data) {
    // set the correct path for the file not the temporary one from the API:
    file.path = "public/media/images/" + file.name;

    // copy the data from the req.files.file.path and paste it to file.path
    fs.unlink(file.path, function (err) {
      if (err) {
        return console.warn(err);
      } else {
        res.json({
          data: data,
          status: 1
        })
        return console.log("The file: " + file.name + " was deleted.");
      }
    });
  });
};

exports.deleteAttachmentFile = function(req, res) {
  /**
   * The following takes the blob uploaded to an arbitrary location with
   * a random file name and copies it to the specified file.path with the file.name.
   * Note that the file.name should come from your upload request on the client side
   * because when the file is selected it is paired with its name. The file.name is
   * not random nor is the file.path.
   */
console.log("deleteFile");
console.log(req.body);
  var fs = require("fs"); 
  var file = req.body.file;   
  fs.readFile(file.filePath, function (err, data) {
    // set the correct path for the file not the temporary one from the API:

    // copy the data from the req.files.file.path and paste it to file.path
    fs.unlink('public/' + file.filePath, function (err) {
      if (err) {
        return console.warn(err);
      } else {
        res.json({
          data: data,
          status: 1
        })
        return console.log("The file: " + file.filePath + " was deleted.");
      }
    });
  });
};


