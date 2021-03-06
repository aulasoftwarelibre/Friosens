@sprint1
Feature: Remove a facility
  As an administrator
  I want to be able to remove facilities
  to when it's not necessary anymore

  Background:
    Given [remove-facility] I'm logged in as an administrator
    And the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |
    And the following facility:
    | id | name    | location | organization_id |
    | 20 | Entrada | Cubierta |              20 |
    And the following unit:
    | name              | refrigerant | facility_id |
    | Planta enfriadora |       R410A |          20 |

  Scenario: Remove an existing facility
    When I remove the facility with ID 20
    Then facility with ID 20 shouldn't exist
    And shouldn't exist any unit with facility ID 20

  Scenario: Remove a facility that does not exist
    When I remove the facility with ID 3
    Then I should receive a Not Found error with code 404 and message "Facility not found"
