beforeEach(() => {
    cy.visit('http://localhost:3000')
})

describe('My first test', function() {
    
    it('Does not do much', function() {
        expect(true).to.equal(true);
    })
})

describe('Get the Inputs and submit Form', () => {
    
        const firstnameInput = () => cy.get(':nth-child(1) > input')
        const lastnameInput = () => cy.get(':nth-child(2) > input')
        const usernameInput = () => cy.get(':nth-child(3) > input')
        const emailInput = () => cy.get(':nth-child(4) > input')
        const passwordInput = () => cy.get(':nth-child(5) > input')
        const confirmpasswordInput = () => cy.get(':nth-child(6) > input')
        const termsInput = () => cy.get('.sc-gsTCUz > input')
        const submitButton = () => cy.get('.sc-dlfnbm')
    
        it('Types inputs and click on submit button', () => {
            //* Name input with name typed
            firstnameInput()
            .should('exist')
            .should('have.value', '')
            .type('Randy')
            .should('have.value', 'Randy')

            lastnameInput()
            .should('exist')
            .should('have.value', '')
            .type('Ortiz')
            .should('have.value', 'Ortiz')

            usernameInput()
            .should('exist')
            .should('have.value', '')
            .type('Randyo28')
            .should('have.value', 'Randyo28')
    
            //* Email input with email typed
            emailInput()
            .should('exist')
            .type('Randy@email.com')
            .should('have.value', 'Randy@email.com')
    
            //* Password input with password typed
            passwordInput()
            .should('exist')
            .type('Ortiz1995')

            //* Confirm Password input with password typed
            confirmpasswordInput()
            .should('exist')
            .type('Ortiz1995')
    
            //* Terms checkbox with a click
            termsInput()
            .should('exist')
            .click()
    
            //* Submit button should submit on click
            submitButton()
            .should('exist')
            .click()
        })
})