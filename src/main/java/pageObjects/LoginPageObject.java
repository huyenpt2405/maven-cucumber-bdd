package pageObjects;

import org.openqa.selenium.WebDriver;

import commons.BasePage;
import pageUIs.LoginPageUI;

public class LoginPageObject extends BasePage {
	WebDriver driver;

	public LoginPageObject(WebDriver driver) {
		super(driver);
		this.driver = driver;
	}

	public String getLoginPageUrl() {
		return getCurrentUrlByJS();
	}
	
	public void clickToHereLink() {
		waitForElementClickable(LoginPageUI.HERE_LINK);
		clickToElement(LoginPageUI.HERE_LINK);
	}
	
	public LoginPageObject openLoginPage(String url) {
		driver.get(url);
		return PageGeneratorManager.getLoginPage(driver);
	}
	
	public void inputToUsernameTextbox(String username) {
	    waitForElementVisible(LoginPageUI.USERNAME_TEXTBOX);
	    sendKeyToElement(LoginPageUI.USERNAME_TEXTBOX, username);
	}
	
	public void inputToPasswordTextbox(String password) {
		waitForElementVisible(LoginPageUI.PASSWORD_TEXTBOX);
	    sendKeyToElement(LoginPageUI.PASSWORD_TEXTBOX,password);
	}
	
	public HomePageObject clickToLoginButton() {
	    waitForElementClickable(LoginPageUI.LOGIN_BUTTON);
	    clickToElement(LoginPageUI.LOGIN_BUTTON);
	    return PageGeneratorManager.getHomePage(driver);
	}
	
//	public void closePopup() {
//		try {
//			waitForElementVisible(LoginPageUI.CLOSE_POPUP_BUTTON);
//			JavascriptExecutor js = (JavascriptExecutor) driver;
//			js.executeScript("document.querySelector(\"#dismiss-button\").click()");
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	} 

}
