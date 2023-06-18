import { Component } from '@angular/core';
import { SharedService } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private sharedService: SharedService
  ) {}

  shareData() {
    this.sharedService.updateUser({id: 1, name: 'John'});
  }
}
