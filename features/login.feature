
Feature: login

    Feature Description : in order to login to smartops
    and select the project and clicks on tickets
    and read data from tickets

    @login
    Scenario: login to smartops
        Given admin navigates to url
        Then admin enters the username
        And admin enters the password
        Then admin clicks on the sign in button

    @selecting
    Scenario Outline: selecting project
        Then admin enters the project name as "<ProjectName>"
        And admin clicks on the project
        Then admin selects the tickets
        Examples:
            | ProjectName   |
            | Automation_S1 |