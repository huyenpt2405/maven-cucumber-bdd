package pageObjects;

import org.openqa.selenium.WebDriver;


public class PageGeneratorManager {
	public static final HomePageObject getHomePage(WebDriver driver) {
		return new HomePageObject(driver);
	}
	
	public static final LoginPageObject getLoginPage(WebDriver driver) {
		return new LoginPageObject(driver);
	}
	
	public static final RegisterPageObject getRegisterPage(WebDriver driver) {
		return new RegisterPageObject(driver);
	}
	
	public static final CommonPageObject getCommonPage(WebDriver driver) {
		return new CommonPageObject(driver);
	}
	
}
