package bankGuru.stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumberConfig.Hooks;
import pageObjects.LoginPageObject;

public class LoginPageSteps {
	WebDriver driver;
	static String loginPageUrl;
	private LoginPageObject loginPage;

	public LoginPageSteps() {
		this.driver = Hooks.openAndQuitBrowser();
	}

	@Given("^I open login page$")
	public void iOpenLoginPage() {
	    loginPageUrl = driver.getCurrentUrl();
	    loginPage = new LoginPageObject(driver);
	}

//	@Then("^Click to close popup$")
//	public void clickToClosePopup() {
//		loginPage.closePopup();
//	}
	
	@Given("^I click to here link$")
	public void iClickToHereLink() {
		loginPage.clickToHereLink();
	}


	@When("^I open login page again$")
	public void iOpenLoginPageAgain() {
	    loginPage.openLoginPage(loginPageUrl);
	}

	@When("^I input to username textbox$")
	public void iInputToUsernameTextbox() {
	    loginPage.inputToUsernameTextbox(RegisterPageSteps.username);
	}

	@When("^I input to password textbox$")
	public void iInputToPasswordTextbox() {
		loginPage.inputToPasswordTextbox(RegisterPageSteps.password);
	}

	@When("^I click to login button$")
	public void iClickToLoginButton() {
	    loginPage.clickToLoginButton();
	}

}
