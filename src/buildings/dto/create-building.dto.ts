
export default class CreateBuildingDto{
    code: string;
    name: string;
    address: string;
    yearBuilt: number;

    constructor(code: string, name: string, address: string, yearBuit: number){
        this.code = code;
        this.name = name,
        this.address = address,
        this.yearBuilt = yearBuit
    }
}