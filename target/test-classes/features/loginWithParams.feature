@login_02
Feature: Facebook login page with params
	
  @login_with_param
  Scenario Outline: Verify login with Username
  #	Given Open facebook application
  	When Input to email textbox with "<Username>"
  	And Input to password textbox with "<Password>"
  	And Click to login button
  #	And Close application
  	
  Examples:
		| Username          | Password  |
		| huyenpt@gmail.com | 123456789 |
		| huy@gmail.com     | 12345678  |
		
	
	@login_datatable_step
	Scenario Outline: Verify login with Username
  #	Given Open facebook application
  	When Input to username and password textbox
  		| Username    | Password  |
  		| <Username>  | <Password>|
  	And Click to login button
  #	And Close application
  	
  Examples:
		| Username          | Password  |
		| huyenpt@gmail.com | 123456789 |
		| huy@gmail.com     | 12345678  |
