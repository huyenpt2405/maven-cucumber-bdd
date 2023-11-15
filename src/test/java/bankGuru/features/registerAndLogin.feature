@register_and_login
Feature: Register and login to bank guru
	As a PO
	I want to login to application
	So that verify login function work properly

  @login
  Scenario: Register and Login to application
    Given I open login page 
    #Then Click to close popup
    And I click to here link
    And I input to email textbox with data "seleniumjava@gmail.com"
    And I click to submit button at register page 
    Then I get username
    And I get password
    When I open login page again
    And I input to username textbox
    And I input to password textbox
    And I click to login button
    Then Verify Home page displayed with message "Welcome To Manager's Page of Guru99 Bank"
    
	@add_new_customer
	Scenario Outline: Add new customer
		Given Open "New Customer" page
		When Input to "Customer Name" textbox with value "<Customer Name>"
		And Input to "f" radio button
		And Input to "Date of Birth" textbox with value "<Dob in>"
		And Input to "Address" textarea with value "<Address>"
		And Input to "City" textbox with value "<City>"
		And Input to "State" textbox with value "<State>"
		And Input to "PIN" textbox with value "<PIN>"
		And Input to "Mobile Number" textbox with value "<Mobile Number>"
		And Input to "E-mail" textbox with value "<Email>"
		And Input to "Password" textbox with value "<Password>"
		And Click to button "Submit"
		Then Verify Success message displayed "Customer Registered Successfully!!!"
		And Verify the valid text displayed at "Customer Name" with inputed value "<Customer Name>"
		And Verify the valid text displayed at "Gender" with inputed value "<Gender>"
		And Verify the valid text displayed at "Birthdate" with inputed value "<Dob out>"
		And Verify the valid text displayed at "Address" with inputed value "<Address>"
		And Verify the valid text displayed at "City" with inputed value "<City>"
		And Verify the valid text displayed at "State" with inputed value "<State>"
		And Verify the valid text displayed at "Pin" with inputed value "<PIN>"
		And Verify the valid text displayed at "Mobile No." with inputed value "<Mobile Number>"
		And Verify the valid text displayed at "Email" with inputed value "<Email>"
		
	Examples:
	| Customer Name | Dob in     | Dob out    | Gender | Address  | City   | State    | PIN    | Mobile Number | Email        | Password |
	| Customer Name | 09/13/1995 | 1995-09-13 | female | An Khanh | Ha Noi | Hoai Duc | 345565 | 0938475733    | huy@gmail.com| 12345678 |
		
