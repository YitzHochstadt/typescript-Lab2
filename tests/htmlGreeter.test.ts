import { HtmlGreeter } from "../src/htmlGreeter"
describe("HtmlGreeter", () => {
    test("default tagname", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hello");
        expect(htmlGreeter.greet("Jim")).toBe("<h1>Hello, Jim<h1/>");
    });
    test("Hey there, Dwight. p", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hey there", "p");
        expect(htmlGreeter.greet("Dwight")).toBe("<p>Hey there, Dwight<p/>");
    });
    test("What's up, dog? h2", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("What's up", "h2");
        expect(htmlGreeter.greet("dog?")).toBe("<h2>What's up, dog?<h2/>");
    });
    test("Yeah that's funny, MICHAEL! div", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Yeah that's funny", "div");
        expect(htmlGreeter.greet("MICHAEL!")).toBe("<div>Yeah that's funny, MICHAEL!<div/>");
    });
});