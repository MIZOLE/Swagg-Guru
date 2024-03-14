import { Component, OnInit } from '@angular/core';
import { juwelary } from '../../services/juwelary.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
 
@Component({
  selector: 'app-juwelary',
  standalone: true,
  templateUrl: './juwelary.component.html',
  styleUrl: './juwelary.component.scss',
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ]
})
export class JuwelaryComponent {
title(title: any){
  throw new Error('Methid cannot be implemented.')
}

store: any;
juw: any;

constructor(private _HTTP: juwelary) {}

ngOnit(): void {
  this.getJuwelary();
}

  getJuwelary() {
    this._HTTP.getJuwelary().subscribe({
      next: (res: any) => {
        this.juw = res;

        console.log(this.juw)
      }, error(error: any) {
        console.log(error)
      }
    })
  }

}
