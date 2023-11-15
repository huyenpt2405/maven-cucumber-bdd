package bankGuru.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumberConfig.Hooks;
import pageObjects.HomePageObject;
import pageObjects.PageGeneratorManager;

public class HomePageSteps {
	WebDriver driver;
	private HomePageObject homePage;
	
	public HomePageSteps() {
		driver = Hooks.openAndQuitBrowser();
		homePage = PageGeneratorManager.getHomePage(driver);
	}

	@Then("^Verify Home page displayed with message \"([^\"]*)\"$")
	public void verifyHomePageDisplayedWithMessage(String arg1) {
	    Assert.assertTrue(homePage.isHomePageDisplayed());
	}
}
