import HomePage from "../../src/components/homepage";
import * as React from "react";
import {configure,shallow,mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-14';
import * as chai from 'chai';
import {expect} from 'chai';
import Summary from "../../src/components/summary";

describe('Summart' , () => {

    configure({adapter: new Adapter()});
    beforeEach(() => {

    });
    describe('textArea', () => {

        it('renders textarea', () => {
            const component = shallow(<Summary/>);
            expect(component.find('[data-test-id="essayText"]')).to.have.length(1)
        });
    });
}