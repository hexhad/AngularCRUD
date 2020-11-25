import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CountryModel } from '../model/country-model';
import { CounteryService } from '../service/countery.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  id: number;
  name: string;
  constructor(private Service: CounteryService, private router: Router,public dialogRed: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
   } 

  ngOnInit(): void {
  }

  save() { 
    
    this.dialogRed.close(this.id + " . " + this.name);
    this.update();
   
  }
  exit() { 
    this.dialogRed.close("Canceled");
    //update
  }

  country: CountryModel[];

  update() {
    this.Service
    .createCountry(this.country).subscribe(data => {
      console.log(data);    
    }, 
    error => console.log(error));
  }
}
