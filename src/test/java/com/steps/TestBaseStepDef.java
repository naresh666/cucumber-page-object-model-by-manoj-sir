package com.steps;

import com.utils.SetUp;
import com.utils.TestBase;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class TestBaseStepDef {

	Steps steps;
	
	public TestBaseStepDef(Steps steps) {
	this.steps=steps;
	}
	
	@Given("^user launch browser$")
	public void user_Launch_Browser() {
		steps.testBase=new TestBase();
		
		steps.testBase.intilizeDriver();
	
	}

	@When("ur enter url")
	public void enter_Url() {
		steps.landingPage=steps.testBase.enterURL(SetUp.AUTOMATION_URL);
	}

}
