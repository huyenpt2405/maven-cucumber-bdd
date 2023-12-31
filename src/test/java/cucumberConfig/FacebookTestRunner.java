package cucumberConfig;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/facebook/features",
		glue = "facebook.stepDefinitions",
		monochrome = true,
//		dryRun = true,
		plugin = {"pretty", "html:target/site/cucumber-report-default", "json:target/site/facbookCucumber.json"},
		snippets = SnippetType.CAMELCASE,
		tags = {"@login_01"}
		)

public class FacebookTestRunner {

}
