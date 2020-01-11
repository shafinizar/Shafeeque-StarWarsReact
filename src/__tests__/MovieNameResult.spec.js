import React from "react";
import { create } from "react-test-renderer";
import MovieNameResult from '../MovieNameResult';

describe("MovieNameResult component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<MovieNameResult/>);
        const instance = component.getInstance();
        expect(instance.state.movie).toBe("");
    });
});