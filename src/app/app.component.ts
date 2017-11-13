import { Component } from '@angular/core';
import { ExitService } from './exit.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private service: ExitService, private loginService: AuthenticationService) {}
  doThis() {
    this.service.exit=true;
  }
}
