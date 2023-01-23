export interface Exercise {
    id:string;
    name:string;
    duration:number;
    calories:number;
    date?:Date;
    status?:'done' | 'canceled' | null;  //nisu obavezne vec opcine stvari '?' i template ne mora da ocekuje
}