package bankGuru.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberConfig.Hooks;
import pageObjects.CommonPageObject;
import pageObjects.PageGeneratorManager;
import utilities.DataHelper;

public class CommonPageSteps {
	WebDriver driver;
	static String loginPageUrl;
	private CommonPageObject commonPage;
	DataHelper dataFaker;
	String email;

	public CommonPageSteps() {
		this.driver = Hooks.openAndQuitBrowser();
		commonPage = PageGeneratorManager.getCommonPage(driver);
		dataFaker = DataHelper.getDataHelper();
		email = dataFaker.getEmailAddress();
	}
	
	@Given("^Open \"([^\"]*)\" page$")
	public void openPage(String pageName) {
		commonPage.clickToDynamicLink(pageName);
	}

	@When("^Input to \"([^\"]*)\" textbox with value \"([^\"]*)\"$")
	public void inputToTextboxWithValue(String fieldName, String inputValue) {
		if (fieldName.equals("E-mail")) {
			inputValue = email;
		}
		commonPage.inputToDynamicTextbox(fieldName, inputValue);
	}

	@When("^Input to \"([^\"]*)\" radio button$")
	public void inputToRadioButton(String inputValue) {
	    commonPage.clickToDynamicRadioButton(inputValue);
	}

	@When("^Input to \"([^\"]*)\" textarea with value \"([^\"]*)\"$")
	public void inputToTextareaWithValue(String fieldName, String inputValue) {
		commonPage.inputToDynamicTextarea(fieldName, inputValue);
	}

	@When("^Click to button \"([^\"]*)\"$")
	public void clickToButton(String buttonValue) {
		commonPage.clickToDynamicButton(buttonValue);
	}

	@Then("^Verify Success message displayed \"([^\"]*)\"$")
	public void verifySuccessMessageDisplayed(String expectedMessage) {
	    Assert.assertTrue(commonPage.isDynamicMessageDisplayed(expectedMessage));
	}

	@Then("^Verify the valid text displayed at \"([^\"]*)\" with inputed value \"([^\"]*)\"$")
	public void verifyTheValidTextDisplayedAtWithInputedValue(String rowName, String expectedValue) {
		if (rowName.equals("Email")) {
			expectedValue = email;
		}
	    Assert.assertEquals(commonPage.getDynamicValueByRowName(rowName), expectedValue);
	    
	}
}
