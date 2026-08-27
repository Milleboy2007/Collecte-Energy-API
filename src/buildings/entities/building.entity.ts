
export default class Building{
    id: number;
    name: string;
    address: string;
    yearBuilt: number;

    constructor(id: number, name: string, address: string, yearBuit: number){
        this.id = id,
        this.name = name,
        this.address = address,
        this.yearBuilt = yearBuit
    }
}