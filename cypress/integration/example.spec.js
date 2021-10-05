
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains eight-ball image', ()=>{
            cy.get('#eight-ball').should('be.visible');
        });
    });
});