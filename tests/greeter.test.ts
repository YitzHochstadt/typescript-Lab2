import { Greeter } from "../src/greeter"

describe("Greeter", () => {
    test("Hello, Jim", () => {
        let greeter: Greeter = new Greeter("Hello");
        expect(greeter.greet("Jim")).toBe("Hello, Jim");
    });
    test("Hey there, Dwight", () => {
        let greeter: Greeter = new Greeter("Hey there");
        expect(greeter.greet("Dwight")).toBe("Hey there, Dwight");
    });
    test("What's up, dog?", () => {
        let greeter: Greeter = new Greeter("What's up");
        expect(greeter.greet("dog?")).toBe("What's up, dog?");
    });
    test("Yeah that's funny, MICHAEL!", () => {
        let greeter: Greeter = new Greeter("Yeah that's funny");
        expect(greeter.greet("MICHAEL!")).toBe("Yeah that's funny, MICHAEL!");
    });
});