package pageObjects;

import org.openqa.selenium.WebDriver;

import commons.BasePage;
import pageUIs.HomePageUI;


public class HomePageObject extends BasePage{
	WebDriver driver;

	public HomePageObject(WebDriver driver) {
		super(driver);
		this.driver = driver;
	}

	public boolean isHomePageDisplayed() {
		 waitForElementVisible(HomePageUI.WELCOME_TEXT);
		 return isElementDisplayed(HomePageUI.WELCOME_TEXT);
	}
}
