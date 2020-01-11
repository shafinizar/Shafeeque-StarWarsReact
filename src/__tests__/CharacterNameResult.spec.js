import React from "react";
import { create } from "react-test-renderer";
import CharacterNameResult from '../CharacterNameResult';

describe("CharacterNameResult component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<CharacterNameResult />);
        const instance = component.getInstance();
        expect(instance.state.characters).toBeDefined();
    });
});