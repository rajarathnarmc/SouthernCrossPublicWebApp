import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuList } from '../common/menu-list';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public menuListEnum = MenuList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * navigation menu item id
   * @param menuId 
   */
  onSelectMenu(menuId: number) {
    if (this.menuListEnum.MemberSearch == menuId) {
      this.router.navigate(['/user/member-search']);
    }
    else if (this.menuListEnum.SearchResult == menuId) {
      this.router.navigate(['/user/search-result']);
    }
  }

}
