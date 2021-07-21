import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService,
    private breakpointObserver: BreakpointObserver
  ) { }

  public isMobile: boolean = false;

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      this.isMobile = result.matches;
    });
    this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);
  }

  toggleSidenav(){
    this.sidenavService.toggleSidenav();
  }

}
