Feature: Performing login

    Background:
        Given I'm on the login page

    Scenario: Register a new user
        When I want to register a new user
        Then I shall be able to sign up

    Scenario: Login with a registered user
        Given I'm on the login page
        When I login with a registered user
        Then I shall be on the main page
    
    Scenario: Add product and perform payment
        Given I'm on the login page
        When I login with a registered user
        When I add a product to the cart
        Then I should be able to perform successful payment


