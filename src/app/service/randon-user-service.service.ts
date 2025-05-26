import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { RandonUserResponse } from '../interface/RandonUserInterface';

@Injectable({
  providedIn: 'root'
})
export class RandonUserServiceService {

  private http = inject(HttpClient)

  constructor() {
    this.CargarUsersFromWeb()
   }


   CargarUsersFromWeb(){

    this.http.get<RandonUserResponse>(`${environment.API_URL}`,
                    {params:{
                        results:100,
                        nat:'es'
                    }}
                  ).subscribe((resp)=>{
                    console.log(resp.results)
                  })
   }

}
