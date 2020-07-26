package com.steps;

import io.cucumber.java.en.And;

public class LandingPageStepDef {

	Steps steps;

	public LandingPageStepDef(Steps steps) {
		this.steps=steps;
	}

	@And("ur click on signin link") 
	public void click_Signin_Link() {

		steps.signinPage=steps.landingPage.clickSigninIn(); 

	}



}
