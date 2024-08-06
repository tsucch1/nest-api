import { Injectable } from '@nestjs/common';
// import { privateDecrypt } from 'crypto';

@Injectable()
export class TargetService {
  private readonly hobby:string ='fashion';
  private readonly favorite_number:number = 333;
  
  gethobbyData()  {
    return {
      hobby: this.hobby,
      favorite_number:this.favorite_number,
    };
  }
}