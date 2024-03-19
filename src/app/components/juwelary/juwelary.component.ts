import { Component, OnInit } from '@angular/core';
import { JuwelaryService } from '../../services/juwelary.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-juwelary',
  templateUrl: './juwelary.component.html',
   
  imports: [
  RouterModule,
  CommonModule,
  ]

})
export class JuwelaryComponent implements OnInit {
  juw: any;

  constructor(private _juwelaryService: JuwelaryService) {}

  ngOnInit(): void {
    this.getJuwelary();
  }

  getJuwelary(): void {
    this._juwelaryService.getJuwelary().subscribe({
      next: (res: any) => {
        this.juw = res;
        console.log(this.juw);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
