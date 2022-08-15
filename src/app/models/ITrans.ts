import { ICard } from "./ICard";

export  class ITrans {
    id : number;
    amount : string;
    transType : number;// (1 - "AUTH", 2 - "COMMIT", 3 - "REFUND")
    transTypeDescription:string;
    cardId : number;
    cardDetails:ICard;
  }

  export  class  transTypeEnum{

    AUTH:number=1;
    COMMIT:number=2;
    REFUND:number=3;
  }