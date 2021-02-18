function display(name){
    return name;
};

class Name {
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    combineNames(){
        return this.firstName + " " + this.secondName;
    }
};

export {display, Name};
