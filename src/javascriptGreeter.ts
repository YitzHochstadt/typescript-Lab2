import { Greeter } from "./greeter";

export class JavaScriptGreeter extends Greeter{
    greet(name:string):string{
        let result = super.greet(name);
        return `console.log('${result}')`
    }
}