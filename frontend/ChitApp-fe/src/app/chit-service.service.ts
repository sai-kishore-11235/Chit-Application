import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChitServiceService {

  constructor(private httpModule : HttpClient) { }

  getAllChits():Observable<any>{
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    // headers.append('Access-Control-Allow-Origin', '*')
    const url = "http://localhost:8080/api/chits/getAllChits"
    return this.httpModule.get(url,{headers})
  }
}
