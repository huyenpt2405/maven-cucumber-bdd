package pageObjects;

import org.openqa.selenium.WebDriver;

import commons.BasePage;
import pageUIs.CommonPageUI;

public class CommonPageObject extends BasePage{
	WebDriver driver;

	public CommonPageObject(WebDriver driver) {
		super(driver);
		this.driver = driver;
	}
	
	public void inputToDynamicTextbox(String fieldName, String inputValue) {
		waitForElementVisible(CommonPageUI.DYNAMIC_TEXTBOX, fieldName);
		if (fieldName.equals("Date of Birth")) {
			removeAttributeInDOM(CommonPageUI.DYNAMIC_TEXTBOX, "type" , fieldName);
			sleepInSecond(1);
		}
		sendKeyToElement(CommonPageUI.DYNAMIC_TEXTBOX, inputValue, fieldName);
	}
	
	public void inputToDynamicTextarea(String fieldName, String inputValue) {
		waitForElementVisible(CommonPageUI.DYNAMIC_TEXTAREA, fieldName);
		sendKeyToElement(CommonPageUI.DYNAMIC_TEXTAREA, inputValue, fieldName);
	}
	
	public void clickToDynamicButton(String buttonValue) {
		waitForElementClickable(CommonPageUI.DYNAMIC_BUTTON, buttonValue);
		clickToElement(CommonPageUI.DYNAMIC_BUTTON, buttonValue);
	}
	
	
	public void clickToDynamicLink(String linkPageName) {
		waitForElementClickable(CommonPageUI.DYNAMIC_LINK, linkPageName);
		clickToElement(CommonPageUI.DYNAMIC_LINK, linkPageName);
	}
	
	public void clickToDynamicRadioButton(String radioButtonValue) {
		waitForElementClickable(CommonPageUI.DYNAMIC_RADIO_BUTTON, radioButtonValue);
		if (!isElementSelected(CommonPageUI.DYNAMIC_RADIO_BUTTON, radioButtonValue)) {
			clickToElement(CommonPageUI.DYNAMIC_RADIO_BUTTON, radioButtonValue);
		}
	}
	
	public boolean isDynamicMessageDisplayed(String message) {
		waitForElementVisible(CommonPageUI.DYNAMIC_LINK, message);
		return isElementDisplayed(CommonPageUI.DYNAMIC_LINK, message);
	}
	
	public String getDynamicValueByRowName(String columnName) {
		waitForElementVisible(CommonPageUI.DYNAMIC_VALUE_BY_ROW_NAME, columnName);
		return getElementText(CommonPageUI.DYNAMIC_VALUE_BY_ROW_NAME, columnName);
	}
}


