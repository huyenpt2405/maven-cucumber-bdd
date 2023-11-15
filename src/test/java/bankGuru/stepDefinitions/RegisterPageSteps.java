package bankGuru.stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumberConfig.Hooks;
import pageObjects.PageGeneratorManager;
import pageObjects.RegisterPageObject;

public class RegisterPageSteps {
	WebDriver driver;
	public static String username, password; 
	private RegisterPageObject registerPage;

	public RegisterPageSteps() {
		driver = Hooks.openAndQuitBrowser();
		registerPage = PageGeneratorManager.getRegisterPage(driver);
	}
	
	@Given("^I input to email textbox with data \"([^\"]*)\"$")
	public void iInputToEmailTextboxWithData(String emailAddress) {
		registerPage.inputToEmailTextboxWithData(emailAddress);
	}

	@Given("^I click to submit button at register page$")
	public void iClickToSubmitButtonAtRegisterPage() {
		registerPage.clickToSubmitButtonAtRegisterPage();
	}

	@Then("^I get username$")
	public void iGetUsername() {
	   username = registerPage.getUsername();
	}

	@Then("^I get password$")
	public void iGetPassword() {
		password = registerPage.getPassword();
	}
}
