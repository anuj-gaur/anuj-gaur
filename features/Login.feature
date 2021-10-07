Feature: Performing login

    Background:
        Given I'm on the login page

    Scenario: Login with a default user
        When I login with a default user
        Then I shall be on the main page
