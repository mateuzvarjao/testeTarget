import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VetorServiceService {

  private readonly APIURL = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  listarVendas(id: number):Observable<[]>{
    const API = `${this.APIURL}/${id}`
    return this.http.get<[]>(API)
  }

}
