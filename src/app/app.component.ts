import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  reactForm:FormGroup;
  reactForm1:FormGroup;

  arr = [12,7,20,25,20];
  
  popFailed;popSuccess
  enteredVal;nullCheck;
  addCheck;addSuccess;


  add(pos, val) {
    if(val!="" && pos!=""){
      this.arr[pos] = parseInt(val);
      this.addSuccess=true;
      setTimeout(()=> this.addSuccess = false,2000);
      console.log(this.arr);
    }else{
      this.addCheck=true;
      setTimeout(()=> this.addCheck = false,2000);
    }
    
  }

  remove(val) {
  if(val!=""){
    this.enteredVal=val;
    const index = this.arr.indexOf(parseInt(val));  
    if (index > -1) {
      this.arr.splice(index, 1);
      this.popSuccess=true
      setTimeout(()=> this.popSuccess = false,2000);

    }else{
      this.popFailed=true;
      setTimeout(()=> this.popFailed = false,2000);
    }
  }else{
    this.nullCheck=true;
    setTimeout(()=> this.nullCheck = false,2000);

  }
  }
  submitForm(){

  }
  submitForm1(){
    
  }

  ngOnInit(){
    this.reactForm = new FormGroup({
      'position': new FormControl(null,[Validators.required]),
      'value': new FormControl(null,Validators.required)
    })

    this.reactForm1 = new FormGroup({
      'RemoveValue': new FormControl(null,Validators.required)
    })
  }
}
