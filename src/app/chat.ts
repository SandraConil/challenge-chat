export class Chat {
    name : string | null;
    born : Date | null;
    race : string | null;
    picture : string| null;

    constructor(name:string | null, born:Date | null, race:string | null, picture:string | null){
       this.name = name;
       this.born = born;
       this.race = race;
       this.picture = picture;

    }
}
