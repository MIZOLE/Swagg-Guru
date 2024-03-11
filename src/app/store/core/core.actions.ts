//funcion for name adding
export class trackNav {
    static readonly type = '[Core] Track nav';
    constructor(public name: string) {}
}
//funcion for getting name 
export class getNav {
    static readonly type = '[Core] Get nav';
    constructor() {}
}


