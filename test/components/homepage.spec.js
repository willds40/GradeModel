import HomePage from "../../src/components/homepage";
import * as React from "react";
import {configure,shallow,mount, ReactWrapper} from "enzyme";
import Adapter from 'enzyme-adapter-react-14';
import * as chai from 'chai';
import {expect} from 'chai';


describe('Homepage' , () => {

    configure({ adapter: new Adapter() });
    beforeEach(() => {

    });
    describe('textArea',()=>{

        it('renders textarea', () => {
            const component = shallow(<HomePage/>);
            expect(component.find('[data-test-id="essayText"]')).to.have.length(1)
        });
    });

    describe('title',()=>{

        it('renders title', ()=>{
            const component = shallow(<HomePage/>);
           expect(component.find('[data-test-id="title"]')).to.have.length(1);
        });
    })

    describe('button', () =>{
        it('should have a submit button', ()=>{
            const component = shallow(<HomePage/>);
            expect(component.find('[data-test-id="submitButton"]')).to.have.length(1);
        })
    })

});
