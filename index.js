//use inquirer npm package to get user input
//use qr-image npm package to turn the entered URL into a QR code
//use the native fs node module to create a text file to save user's input 
  
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([{
    "message": "Type what you want to convert into a QR code: ",
    "name": "URL" 
  }])
  .then((answers) => {
    // console.log(answers); //answer will have form: {URL: someInputUrl}
    const url = answers.URL;
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_image.png'));
    
    fs.writeFile("URL.txt", url, (err) => { //save url into URL.txt
        if (err) throw err;
        console.log("The file has been saved!");
    });
  });



 
