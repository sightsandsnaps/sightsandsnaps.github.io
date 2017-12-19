import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeTitle: string = 'Sighs & Snaps';
  user: User;

  constructor() {
  }

  ngOnInit() {
    this.user = new User();
    this.user.firstname = "Gaurav";
    this.user.lastname = "Singh";
  }
}
