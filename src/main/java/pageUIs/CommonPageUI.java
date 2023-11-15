package pageUIs;

public class CommonPageUI {
	public static final String DYNAMIC_TEXTBOX = "xpath=//td[text()='%s']//following-sibling::td/input";
	public static final String DYNAMIC_TEXTAREA = "xpath=//td[text()='%s']//following-sibling::td/textarea";
	public static final String DYNAMIC_RADIO_BUTTON = "xpath=//input[@type='radio' and @value='%s']";
	public static final String DYNAMIC_LINK = "xpath=//a[text()='%s']";
	public static final String DYNAMIC_MESSAGE = "xpath=//p[@class='heading3' and text()='%s']";
	public static final String DYNAMIC_BUTTON = "xpath=//input[@value='%s']";
	public static final String DYNAMIC_VALUE_BY_ROW_NAME = "xpath=//td[contains(text(),'%s')]/following-sibling::td";
}
