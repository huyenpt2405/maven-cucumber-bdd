@login_01
Feature: Login without param

#	Background: Open facebook application

  @displayed
  Scenario: Verify login page display
    #Given Open facebook application
    Then Verify email textbox is display
    And Verify password textbox is display
    #And Close application
    
  @login_without_param
  Scenario: Verify login with Username
  #	Given Open facebook application
  	When Input to email textbox
  	And Input to password textbox
  	And Click to login button
  #	And Close application
  	
