package com.steps;

import io.cucumber.java.en.And;

public class SigninPageStepDef {
	
	Steps steps;
	
	public SigninPageStepDef(Steps steps) {
		this.steps=steps;
	}

	@And("ur enter emailaddress as \"([^\"]*)\"")
	public void enter_Email_Address(String emailAddress) {
		steps.signinPage.enterNewEmailAddrss(emailAddress);
		
		
	}
	
	@And("ur click on create account button")
	public void click_Create_Account_Button() {
	steps.createAccountPage=steps.signinPage.clickCreateAccountButton();

	}
	@And("user enter exsiting emailaddress as \"([^\"]*)\"")
	public void user_enter_exsiting_emailaddress(String email) {
		steps.signinPage.enterRegisterdEmailaddress(email);
		
	}
	@And("user enter extisting password as \"([^\"]*)\"")
	public void user_enter_extisting_password(String password) {
		steps.signinPage.enterRegisterdPassword(password);
		
	}
	@And("Click on sign button")
	public void Click_on_sign_button() {
		steps.myAccountPage=steps.signinPage.clickOnSignIn();
	}
}
