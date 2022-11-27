const fs = require('fs');
//library for creating sound
const beep = require('beepbeep');

const ListFiles = function getFiles(foldername, path, predictedFolder){
  var files=[];
  var items=[];
  //Store the folders in files.
  files = fs.readdirSync(path);

  //For extracting folders 
  files.forEach(function(element)
  {

    if(element.substr(0,predictedFolder.length)==predictedFolder) 
      items.push(element);    
  });
  if(items.length==0)
    beep();
  return items;
}

const catfile = function getContents(foldername, path, predictedFolder){
   var fichier=[];
  var item=[];
  //Store the folders in files.
  fichier = fs.readFile((path,'utf8');

  //For extracting folders 
  fichier.forEach(function(element)
  {

    if(element.substr(0,predictedFolder.length)==predictedFolder) 
      item.push(element);    
  });
  if(item.length==0)
    beep();
  return item;
}





const CreateSound = function beepSound(){
  beep();
}
module.exports = {
  ListFiles,
  CreateSound,
  catfile
}
