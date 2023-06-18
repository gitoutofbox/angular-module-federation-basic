import { Component, OnInit } from '@angular/core';
import { SharedService, User } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getUserInfo().subscribe((user: User | undefined) => {
      console.log(user)
    })
  }


}
