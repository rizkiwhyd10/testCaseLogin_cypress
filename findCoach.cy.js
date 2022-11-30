describe('Basic Tests', () => {
  // LOGIN
  it('Login Input Email Empty', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type(' ')
    cy.get('.mb-6 > .bg-gray-50').type('12345678')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Oops! Please input email').should('exist')
  })

  it('Login Input Password Empty', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type('nando@gmail.com')
    cy.get('.mb-6 > .bg-gray-50').type(' ')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Oops! Please input password').should('exist')
  })

  it('Login Input All Empty', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type(' ')
    cy.get('.mb-6 > .bg-gray-50').type(' ')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Oops! Please input email').should('exist')
    cy.contains('Oops! Please input password').should('exist')
  })

  it('Login Input Email not have @', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type('nando')
    cy.get('.mb-6 > .bg-gray-50').type('12345678')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Oops! Please added @ for your email!').should('exist')
  })

  it('Login Input Email Wrong', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type('nandor@gmail.com')
    cy.get('.mb-6 > .bg-gray-50').type('1234567')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Incorrect your email/password!').should('exist')
  })

  it('Login Input Password Wrong', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type('nando@gmail.com')
    cy.get('.mb-6 > .bg-gray-50').type('1234567')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Incorrect your email/password!').should('exist')
  })

  it('Login Input Email not have account', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type('rizki@gmail.com')
    cy.get('.mb-6 > .bg-gray-50').type('12345678')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Incorrect your email/password!').should('exist')
  })

  it('Register akun yang sudah punya akun', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')

    // REGISTER yang sudah punya akun
    cy.contains('Signup Instead').click()
    cy.get('.mb-4 > .bg-gray-50').type('nando@gmail.com')
    cy.get('.mb-6 > .bg-gray-50').type('12345678')
    cy.contains('Signup').click()
    cy.contains('Email has already exist, Try another email!').should('exist')
  })

  it('Register VALID', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')

    cy.contains('Signup Instead').click()
    cy.get('.mb-4 > .bg-gray-50').type('rizki@gmail.com')
    cy.get('.mb-6 > .bg-gray-50').type('12345678')
    cy.contains('Signup').click()
    cy.contains('Yeay, success create account!').should('exist')
  })

  it('Login Input Valid', () => {
    cy.visit('https://findcoach-projectvue.web.app/coaches')

    cy.contains('Login').click()
    cy.contains('Get Started your dream as a coach Now!').should('exist')
    cy.get('.mb-4 > .bg-gray-50').type('rizki@gmail.com')
    cy.get('.mb-6 > .bg-gray-50').type('12345678')
    cy.get('.form-login > .flex > .flex-1').click()
    cy.contains('Yeay, success login!').should('exist')
    cy.contains('Register a Coach').should('exist')
  })
})