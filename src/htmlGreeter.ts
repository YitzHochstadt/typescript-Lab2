import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter{
    tagname: string;
    constructor(greeting:string, tagname:string = "h1"){
        super(greeting);
        this.tagname = tagname
    }
    greet(name:string):string{
        return `<${this.tagname}>${super.greet(name)}<${this.tagname}/>`
    }
}