import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

   emptyMsg;
   apiException;
   memberList :Member[];

  constructor(private route: ActivatedRoute, private  memberService: MemberService) {
    this.emptyMsg='';
    this.apiException = '';
    this.memberList = [];
   }

  ngOnInit(): void {
    const policyNumber =  this.route.snapshot.paramMap.get('policyNumber');
    const memberCardNumber = this.route.snapshot.paramMap.get('memberCardNumber');

    /** Validate query string parameter before call search member */
    if(typeof policyNumber !== 'undefined' && policyNumber){
      this.SearchMembers(policyNumber,memberCardNumber);
    }  
  }

  /** Search member function for get search result from API */
  private SearchMembers(policyNumber:any,memberCardNumber:any) {
    
     this.memberService.SearchMembers(policyNumber,memberCardNumber).subscribe((result:any) => {
       if(typeof result !== 'undefined' && result.length >0){
        this.memberList = result;
        }else{
          this.emptyMsg='Search result not found.';
        }
    },
    () => {
      this.apiException='Search API thrown exception.';
    });
  }

}
