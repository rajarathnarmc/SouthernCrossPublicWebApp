import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import SEARCH_API_BASE_URL from '../common/app-constant';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { 
  }

  public SearchMembers(policyNumber: number, memberCardNumber:any): Observable<Member> {

    var url = `${SEARCH_API_BASE_URL}/${policyNumber}/${memberCardNumber}`; 

    return this.http.get<Member>(url).pipe(
      map((response: any) => {
        return this.returnResponse(response);
      }));
  }

  private returnResponse(response:any) {
    if (response._statusCode > 399) {
      throw (response);
    }
    return response;
  }
}
