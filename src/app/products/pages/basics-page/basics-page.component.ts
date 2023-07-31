import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string= 'argueta';
  public nameUpper: string= 'ARGUETA';
  public fullname: string= 'jEsuS aRgUeTa';

  public customDate: Date=new Date();

}
