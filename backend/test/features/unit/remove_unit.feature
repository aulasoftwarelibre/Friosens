@sprint1
Feature: Remove unit
  As administrator
  I want to be able to remove a unit when it is useless

  Background:
    Given [remove-unit] I'm logged as administrator
    And the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |
    And the following facility:
    | id | name           | location          | organization_id |
    | 20 | Sala principal | Cubierta exterior |              20 |
    And the following unit:
    | id | name              | refrigerant | facility_id |
    | 20 | Planta enfriadora |       R410A |          20 |

  Scenario: Remove unit
    When I remove the unit with ID 20 of facility ID 20
    Then I should receive a response with message "Unit removed" and 200 as status code
    And unit with ID 20 shouldn't appear when I search units of facility ID 20
  Scenario: Remove a unit that does not exist
    When I remove the unit with ID 2 of facility ID 20
    Then [remove_unit] I should receive a Not Found error with code 404 and message "Unit not found"