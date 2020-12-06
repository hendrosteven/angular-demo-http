import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listOfUser: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.findAll().subscribe((results) =>{
      this.listOfUser = results.data;
      console.log(this.listOfUser);
    });
  }
}
