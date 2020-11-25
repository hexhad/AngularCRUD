import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { report } from 'process';
import { CountryModel } from '../model/country-model';
import { CounteryService } from '../service/countery.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

  

  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  CountryModel[];


  displayedColumns: string[] = ['id', 'name', "Delete","Edit"];
  dataSource = new MatTableDataSource<CountryModel>(this.ELEMENT_DATA);

  constructor(private Service: CounteryService, private router: Router, public dialog: MatDialog) { }
  
  openDialog(title:string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        myVar: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  gotoList() {
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.getAllCountry();
  }

  AddDialog() { 
    this.openDialog('Add Data');
  }

  getEdit(id:number) {
    this.getOne(id);
    this.openDialog('Edit Data');
  }

  public getAllCountry() { 
    let resp = this.Service.getAllCountries();
    resp.subscribe(report => this.dataSource.data = report as CountryModel[]);
  }

  public getOne(id:number) {
    let res = this.Service.getOne(id);
    res.subscribe(report => this.dataSource.data = report as CountryModel[]);
  }

  public delOne(id:number) {
    let res = this.Service.delOne(id);
    res.subscribe(report => this.dataSource.data = report as CountryModel[]);
  }

  reloadData() {
    this.Service.getAllCountries();
  }

  deleteCountry(id: number) {
    this.Service.delOne(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
