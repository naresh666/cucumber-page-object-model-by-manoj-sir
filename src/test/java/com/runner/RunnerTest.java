package com.runner;

import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.utils.TestBase;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

//mvn clean -Dtest=RunnerTest test


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Feature",
				glue= "com.steps",
				plugin= {"pretty","html:temp123/html-reports",
						"json:jsonReportsFolder/cucumber.json",
						"junit:xmlReports/cucumber.xml",
						"de.monochromata.cucumber.report.PrettyReports:target/cucumber"},
				monochrome = true)
public class RunnerTest {
	/*TestBase testbase;
	WebDriver driver;
	@Before
	public void initializeTest() {
		testbase=new TestBase();
		driver=testbase.intilizeDriver();
	}
	@After
	public void endTest(Scenario scenario) {
		if(scenario.isFailed()) {
			 final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
         scenario.embed(screenshot, "image/png"); //stick it in the report
			
		}
		
	}
*/
}
