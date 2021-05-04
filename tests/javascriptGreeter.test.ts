import { JavaScriptGreeter } from "../src/javascriptGreeter";

describe("JavaScriptGreeter", () => {
    test("console.log('Hello, Jim')", () => {
        let javascriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
        expect(javascriptGreeter.greet("Jim")).toBe("console.log('Hello, Jim')");
    });
    test("console.log('Hey there, Dwight')", () => {
        let javascriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hey there");
        expect(javascriptGreeter.greet("Dwight")).toBe("console.log('Hey there, Dwight')");
    });
    test("console.log('What's up, dog?')", () => {
        let javascriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("What's up");
        expect(javascriptGreeter.greet("dog?")).toBe("console.log('What's up, dog?')");
    });
    test("console.log('Yeah that's funny, MICHAEL!')", () => {
        let javascriptGreeter: JavaScriptGreeter = new JavaScriptGreeter("Yeah that's funny");
        expect(javascriptGreeter.greet("MICHAEL!")).toBe("console.log('Yeah that's funny, MICHAEL!')");
    });
});