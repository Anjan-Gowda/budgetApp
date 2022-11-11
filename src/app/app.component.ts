import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{

  name = 'Angular ' + VERSION.major;
  budget:number=0;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  income
description: any;
amount: any;

  ngOnInit(): void {
   
    }

    submit(){
      console.log(this.description,this.amount)
    }
}
