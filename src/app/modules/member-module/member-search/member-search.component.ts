import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Member } from '../../models/member';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss']
})
export class MemberSearchComponent {
 
  /** define the variable for member search form */
  policyNumber;
  memberCardNumber;
  serviceDate;

  constructor(private calendar: NgbCalendar, private router: Router) {
    this.policyNumber = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
    this.memberCardNumber = new FormControl('');
    this.serviceDate = this.calendar.getToday();
  }

  onSearchMember(): void {

    /** Validate policyNumber before naviage to the search result page */
    if (this.policyNumber.value) {
      console.log(this.policyNumber.value);
        this.router.navigate(['/user/search-result',{ policyNumber: this.policyNumber.value, memberCardNumber: this.memberCardNumber.value }]);
    } else {
      this.policyNumber.markAsDirty({ onlySelf: true });
      this.policyNumber.markAsTouched({ onlySelf: true });
      this.policyNumber.setErrors({ 'required': true });
    }
  }

  /** Reset the search screen */
  onReset() {
    this.policyNumber.setValue('');
    this.memberCardNumber.setValue('');
    this.serviceDate = this.calendar.getToday();
  }

}
