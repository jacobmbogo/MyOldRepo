export function display(name){
    return name;
};

export default class Name {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    combineNames(){
        return this.firstName + " " + this.secondName;
    }
};
