import { RandonUserResponse, RandomUserType, Data } from './../interface/RandonUserInterface';
export class RandomUserMapper{

  static generarRandom(){
    return (Math.floor(Math.random() * 2 ) + 1 )
  }

  static ResponseMapper(item:Data):RandomUserType{

    return{
        id:item.login.uuid,
        nombre:`${item.name.title}. ${item.name.first}  ${item.name.last}`,
        genero:item.gender,
        email:item.email,
        telefono:item.cell,
        imagen:item.picture.large,
        direccion:item.location.street.name,
        ciudad:item.location.city,
        pais:item.location.country,
        latitud:item.location.coordinates.latitude,
        longitud:item.location.coordinates.longitude,
        codigoPais:item.nat,
        estado:RandomUserMapper.generarRandom()

    }

  }


  static ResponseUserConvert(userlist:Data[]):RandomUserType[]{
    return userlist.map(this.ResponseMapper)

  }

}
