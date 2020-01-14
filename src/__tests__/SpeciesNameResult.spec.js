import React from "react";
import { create } from "react-test-renderer";
import SpeciesNameResult from '../SpeciesNameResult';

describe("SpeciesNameResult component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<SpeciesNameResult />);
        const instance = component.getInstance();
        expect(instance.state.species).toBeDefined();
    });
});