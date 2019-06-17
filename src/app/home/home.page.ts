import { Component } from '@angular/core';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  twoOrThreeFlag=0;
  str = "";//abc\ndef\nghi\njkl\nmno\npqr\nstu\nvwx\nyza";
  linesArray=[];
  
  constructor(private filePicker: IOSFilePicker,
    private file:File,
    platform: Platform
    ) {
      platform.ready().then((readySource) => {
        var textArea=document.getElementById("textArea");
        textArea.style.width=platform.width()+"px";
        textArea.style.height=platform.height()+"px";
        textArea.style.display="none";
      });

    }
    public readfile(file: any): void {
      let reader = new FileReader();
      reader.onload = (e) => {
        let dataUrl = reader.result;
        //and do something with the reader.
      };
      reader.readAsText(file);
    }
    getTextOfFile(currentUrl:any){
      console.log("currentUrl= "+currentUrl);
      let path = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
      let file = currentUrl.substring(currentUrl.lastIndexOf('/')+1, currentUrl.length);
      console.log("currentUrl2= ");
      this.file.readAsText(path,file).then((data)=>{
        //not going in here
        console.log('data BINGO= '+data);
      }).catch(err=>console.log('err2= '+err));
      console.log("currentUrl3= ");

      




      //let reader = new FileReader();
      //reader.onload = (e) => {
        //let dataUrl = reader.result;
        //and do something with the reader.
        //console.log("BINGO!!!");

      //};
      //reader.readAsText(currentUrl);//.files[0]
      var textArea=document.getElementById("textArea");
      textArea.innerHTML=currentUrl;      
      this.splitToLines();

    }
    ionViewDidEnter(){
      
    }
    splitToLines(){
      var textArea=document.getElementById("textArea");
      var val = String(textArea.innerHTML);
      this.linesArray = val.split("\n");

      console.log("linesarray= "+this.linesArray);
    }
    changeColorModeToRG(){
      this.twoOrThreeFlag=1;
    }
    changeColorModeToRGB(){
      this.twoOrThreeFlag=2;
    }
    chooseFile(){
      this.filePicker.pickFile()
      .then(uri =>{
        console.log("uri= "+uri);
        this.getTextOfFile(uri);
      })
      .catch(err => console.log('Error', err));
    }

}
//this.platform.ready().then(() => {
    //});
/**this.filePath.resolveNativePath(currentUrl).then(
        resolvedFilePath => {

        let path = resolvedFilePath.substring(0, 
          resolvedFilePath.lastIndexOf('/'));
        let file = resolvedFilePath.substring(
          resolvedFilePath.lastIndexOf('/')+1,
        resolvedFilePath.length);
        //this.readCsvData(path, file)
        alert("BINGO!!!");
        //this.file.readAsBinaryString(path, file)
        //.then(content=>{
          //console.log("File-Content: "+ JSON.stringify(content));
        //})
        //.catch(err=>{
          //console.log(err);
          //alert(JSON.stringify(err));
        //});  
        
      }).catch(err => {
        alert(JSON.stringify(err));
      });
   */

