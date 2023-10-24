import { Component } from '@angular/core';
import { FaucetService } from './faucet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faucetFrontend';

  constructor(public faucet:FaucetService){
    
  }
}
