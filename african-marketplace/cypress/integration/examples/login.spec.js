beforeEach(() => {
    cy.visit('http://localhost:3001')
})

describe('Login app',() =>{

    const signInInput = () => cy.get('button[id=signIn]')
    const userNameInput = () => cy.get('input[name=userName]')
    const passwordInput = () => cy.get('input[name=password]')

    it('sanity check to make sure our tests work', () => {
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing', () => {
        signInInput().should('exist')
        userNameInput().should('exist')
        passwordInput().should('exist')
    })

    describe('Filling out the inputs', () => {
        it('sign in button is disabled', () =>{
            signInInput().should('be.disabled')
        })
        it('can type in inputs', () => {
            userNameInput()
            .should('have.value','')
            .type('name')
            .should('have.value','name')

            passwordInput()
            .should('have.value','')
            .type('password1234')
            .should('have.value','password1234')

            signInInput().should('not.be.disabled')
            signInInput().click()
        })
    })

})

