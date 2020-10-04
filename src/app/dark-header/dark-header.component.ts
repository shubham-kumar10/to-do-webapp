import { Component, OnInit } from '@angular/core';
import { DarkHeaderService } from '../dark-header.service';

@Component({
  selector: 'app-dark-header',
  templateUrl: './dark-header.component.html',
  styleUrls: ['./dark-header.component.css']
})
export class DarkHeaderComponent implements OnInit {

  constructor(private appService: DarkHeaderService) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
}
