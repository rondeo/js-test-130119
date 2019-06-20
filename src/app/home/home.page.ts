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
  maxTextWidth=0;

  constructor(private filePicker: IOSFilePicker,
    private file:File,
    platform: Platform
    ) {
      platform.ready().then((readySource) => {
        var textArea=document.getElementById("textArea");
        //textArea.innerHTML='';
        //textArea.style.width="768px";//platform.width()+"px";
        //textArea.style.height="200px";//platform.height()+"px";
        textArea.style.display="none";
        this.maxTextWidth=768;//platform.width();
        //this.splitToLines();
        //var spanText=document.getElementById("spanText");
        //spanText.style.display="none";
        

        //console.log("File-Content: "+ JSON.stringify(textArea.innerText));//JSON.stringify(content));
        
        //var textTest=String(textArea.innerHTML);
        //console.log("this.getTextWidth(test) "+this.getTextWidth("alpha"));
        
      });

    }
    getTextOfFile(currentUrl:any){
      console.log("currentUrl= "+currentUrl);
      currentUrl=currentUrl.replace("/private","file://");
      let path = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
      let file = currentUrl.substring(currentUrl.lastIndexOf('/')+1, currentUrl.length);
      console.log("currentUrl2= ");
      console.log("path= "+path);
      console.log("file= "+file);
      this.file.readAsBinaryString(path, file)
      .then(content=>{
        currentUrl=content+'';//JSON.stringify();
        //not going in here.
        //currentUrl = currentUrl.replace(/\r?\n/g, '');

        console.log("File-Content: "+ currentUrl);//JSON.stringify(content));
      
        //var textArea=document.getElementById("textArea");
        //textArea.innerText=currentUrl;      
        //console.log("File-Content: "+ JSON.stringify(textArea.innerText));//JSON.stringify(content));
        this.splitLines(currentUrl);
  
      })
      .catch(err=>{
        console.log('err2= '+JSON.stringify(err));
        //alert(JSON.stringify(err));
      }); 
    }
    replaceBigItems(){
      console.log("replaceBigItems= ");
      for(var i=0;i<this.linesArray.length;i++){
        var thisLine=this.linesArray[i];
        if(this.getTextWidth(thisLine)>768){
            var thisLine1 = thisLine.slice(0, thisLine.length/2);
            var thisLine2 = thisLine.slice(thisLine.length/2);
            this.linesArray.splice(i,1);
            this.linesArray.splice(i,0,thisLine1);
            this.linesArray.splice(i+1,0,thisLine2);
        }
      }
      //console.log("this.linesarray= "+this.linesArray);
      
    }
    splitLinesArray(text=''){
      // \cf
      var startPos = text.indexOf("\cf");
      text = text.slice(startPos+3);

      this.linesArray=text.split("\n");
      return null;
    }
    splitLines(text='') {
      console.log("textTest "+text);

      this.splitLinesArray(text);
      setTimeout(() => {
        this.replaceBigItems();

      }, 2000);
      //.then(()=>{
        //console.log("hei1");
        //this.replaceBigItems();
      //})
      //.catch(err=>{
        //console.log('err2= '+JSON.stringify(err));
      //}); 
      
       
}
    splitToLines(textContent=''){
      //var textArea=document.getElementById("textArea");
      //this.linesArray = String(textArea.innerHTML).split("\n");

      
      console.log("linesarray= "+this.linesArray);
    }
    getTextWidth(text) {
      var spanTest=document.getElementById("spanText");
      spanTest.innerHTML=text;
      return spanTest.clientWidth;
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

