import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './member-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchResultsComponent, MemberSearchComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UserModule { }
