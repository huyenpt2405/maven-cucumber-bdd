package pageObjects;

import org.openqa.selenium.WebDriver;

import commons.BasePage;
import pageUIs.RegisterPageUI;

public class RegisterPageObject extends BasePage {
	WebDriver driver;

	public RegisterPageObject(WebDriver driver) {
		super(driver);
		this.driver = driver;
	}
	
	public void inputToEmailTextboxWithData(String emailAddress) {
	    waitForElementVisible(RegisterPageUI.EMAIL_TEXTBOX);
	    sendKeyToElement(RegisterPageUI.EMAIL_TEXTBOX, emailAddress);
	}

	public void clickToSubmitButtonAtRegisterPage() {
	    waitForElementClickable(RegisterPageUI.SUBMIT_BUTTON);
	    clickToElement(RegisterPageUI.SUBMIT_BUTTON);
	}

	public String getUsername() {
	    waitForElementVisible(RegisterPageUI.USER_ID_TEXT);
	    return getElementText(RegisterPageUI.USER_ID_TEXT);
	}

	public String getPassword() {
		waitForElementVisible(RegisterPageUI.PASSWORD_TEXT);
	    return getElementText(RegisterPageUI.PASSWORD_TEXT);
	}
}
