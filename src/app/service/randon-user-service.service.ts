import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { RandomUserType, RandonUserResponse } from '../interface/RandonUserInterface';
import { RandomUserMapper } from '../mapper/RandonUserMapper';

@Injectable({
  providedIn: 'root'
})
export class RandonUserServiceService {

  private http = inject(HttpClient)
  ListadoUsers = signal<RandomUserType[]>([])

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
                    const ArrayUSers = RandomUserMapper.ResponseUserConvert(resp.results)
                    this.ListadoUsers.set(ArrayUSers)
                  })
   }

}
