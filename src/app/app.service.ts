import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url="https://www.datos.gov.co/resource/bx26-pux4.json";

  constructor(private http: HttpClient) { }

  obtener(){
    return this.http.get(this.url);
  }

}
