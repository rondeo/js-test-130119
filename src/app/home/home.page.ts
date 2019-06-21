import { Component } from '@angular/core';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import {Platform} from '@ionic/angular';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

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
        this.maxTextWidth=768;//platform.width();
        
      });

    }
    getTextOfFile(currentUrl:any){
      console.log("currentUrl= "+currentUrl);
      currentUrl=currentUrl.replace("/private","file://");
      let path = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
      let file = currentUrl.substring(currentUrl.lastIndexOf('/')+1, currentUrl.length);
      this.file.readAsText(path, file)
      .then(content=>{
        currentUrl=content+'';//JSON.stringify();

        console.log("File-Content: "+ currentUrl);//JSON.stringify(content));
      
        this.splitLines(currentUrl);
  
      })
      .catch(err=>{
        console.log('err2= '+JSON.stringify(err));
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
      
    }
    splitLinesArray(text=''){
      var startPos = text.indexOf("\cf");
      text = text.slice(startPos+3);
      this.linesArray=text.split("\n");
      return null;
    }
    splitLines(text='') {

      this.splitLinesArray(text);
      setTimeout(() => {
        this.replaceBigItems();

      }, 2000);
        
}
    getTextWidth(text) {
      var spanTest=document.getElementById("spanText");
      spanTest.innerHTML=text;
      return spanTest.clientWidth;
  }

    changeColorModeToRG(){
      console.log("changeColorModeToRG");
      this.twoOrThreeFlag=1;
    }
    changeColorModeToRGB(){
      console.log("changeColorModeToRGB");
      this.twoOrThreeFlag=2;
    }
    chooseFile(){
      console.log("chooseFile");
      this.filePicker.pickFile()
      .then(uri =>{
        console.log("uri= "+uri);
        this.getTextOfFile(uri);
      })
      .catch(err => console.log('Error', err));
    }

}

