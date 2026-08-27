
export default class CreateBuildingDto{
    name: string;
    address: string;
    yearBuilt: number;

    constructor(name: string, address: string, yearBuit: number){
        this.name = name,
        this.address = address,
        this.yearBuilt = yearBuit
    }
}