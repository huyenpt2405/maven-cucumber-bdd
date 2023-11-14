package stepDefinitions;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FacebookSteps {
	WebDriver driver;
	
//	@Given("^Open facebook application$")
	@Before
	public void openFacebookApplication(){
	    WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.get("https://www.facebook.com/");
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Then("^Verify email textbox is display$")
	public void verifyEmailTextboxIsDisplay(){
	   Assert.assertTrue(driver.findElement(By.id("email")).isDisplayed());
	}

	@Then("^Verify password textbox is display$")
	public void verifyPasswordTextboxIsDisplay(){
		Assert.assertTrue(driver.findElement(By.id("pass")).isDisplayed());
	}
	
	@When("^Input to email textbox$")
	public void inputToEmailTextbox() {
		WebElement emailEl = driver.findElement(By.id("email"));
		emailEl.clear();
		emailEl.sendKeys("huyn@gmail.com");
	}

	@When("^Input to password textbox$")
	public void inputToPasswordTextbox() {
		WebElement passwordEl = driver.findElement(By.id("pass"));
		passwordEl.clear();
		passwordEl.sendKeys("123456");
	}

	@When("^Click to login button$")
	public void clickToLoginButton() {
	    driver.findElement(By.name("login")).click();
	}
	
	@When("^Input to email textbox with \"([^\"]*)\"$")
	public void inputToEmailTextboxWith(String email) {
		WebElement emailEl = driver.findElement(By.id("email"));
		emailEl.clear();
		emailEl.sendKeys(email);
	}

	@When("^Input to password textbox with \"([^\"]*)\"$")
	public void inputToPasswordTextboxWith(String password) {
		WebElement passwordEl = driver.findElement(By.id("pass"));
		passwordEl.clear();
		passwordEl.sendKeys(password);
	}
	
	@When("^Input to username and password textbox$")
	public void inputToUsernameAndPasswordTextbox(DataTable table) {
//		List<Map<String, String>> customer = table.asMaps(String.class, String.class);
//		driver.findElement(By.id("email")).clear();
//		driver.findElement(By.id("email")).sendKeys(customer.get(0).get("Username"));
//		driver.findElement(By.id("pass")).clear();
//		driver.findElement(By.id("pass")).sendKeys(customer.get(0).get("Password"));
		
		for (Map<String, String> info : table.asMaps(String.class, String.class)) {
			driver.findElement(By.id("email")).clear();
			driver.findElement(By.id("email")).sendKeys(info.get("Username"));
			driver.findElement(By.id("pass")).clear();
			driver.findElement(By.id("pass")).sendKeys(info.get("Password"));
		}
		
	}
	
//	@Then("^Close application$")
	@After
	public void closeApplication(){
	    driver.quit();
	}
}
