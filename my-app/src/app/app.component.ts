import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  productValue:string="";
  customerValue:string="";
  productId($event: any){
    this.productValue;
    console.log($event);

  }
  customerId($event: any){
    this.customerValue;
    console.log($event);

  }
}
