import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberSearchComponent } from './member-search/member-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: 'search-result', component: SearchResultsComponent },
  { path: 'member-search', component: MemberSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
