//funcion for name adding
export class AddName {
    static readonly type = '[Core] Add Name';
    constructor(public name: string) {}
}
//funcion for getting name 
export class GetName {
    static readonly type = '[Core] Get Name';
    constructor() {}
}


