import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private cd: ChangeDetectorRef) {
    
  }


  ngOnInit(): void {
    this.system();

    (<any>window).api.receive("updated", (args:any) => {
      this.isDarkMode = args[0];
      this.cd.detectChanges();
      console.log("isDarkMode:", this.isDarkMode);
    });

  }
  title = 'electron-app';
  isDarkMode:boolean = false;
  isSystem:boolean = true;
  

  public async toggle() {
    this.isDarkMode = await (<any>window).darkMode.toggle();
    this.isSystem = false;
  }

  public async system() {
    this.isDarkMode = await (<any>window).darkMode.system();
    this.isSystem = true;
  }


}
