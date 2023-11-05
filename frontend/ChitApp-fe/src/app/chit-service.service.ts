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
    const url = "http://localhost:5001/api/chits/"
    return this.httpModule.get(url,{headers})
  }

  getChit(id:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    // headers.append('Access-Control-Allow-Origin', '*')
    const url = `http://localhost:5001/api/chits/${id}`
    return this.httpModule.get(url,{headers})
  }

  getCalculatedAmount():Observable<any>{
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    // headers.append('Access-Control-Allow-Origin', '*')
    const url = "http://localhost:8080/api/chits/calculate-amount-due"
    return this.httpModule.get(url,{headers})
  }
  saveChit(data:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    // headers.append('Access-Control-Allow-Origin', '*')
    const url = "http://localhost:8080/api/chits/saveChit"
    return this.httpModule.post(url,data,{headers})
  }
  updateChit(data:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    // headers.append('Access-Control-Allow-Origin', '*')
    const url = "http://localhost:8080/api/chits/updateChit"
    return this.httpModule.put(url,data,{headers})
  }
}
