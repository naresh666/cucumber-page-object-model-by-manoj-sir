package com.steps;

import org.junit.Assert;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class MyAccoountPageStepDef {
	
	Steps steps;
	public MyAccoountPageStepDef(Steps steps)
	{
		this.steps=steps;
	}
	@Then("ur should see account name as \"([^\"]*)\"")
	public void verifyUserName(String createdUserName)
	{
		Assert.assertEquals(createdUserName, steps.myAccountPage.getCreatedAccountName());
	}
	@And("user click on my personal information link")
	public void user_click_my_personal_information_link() {
		steps.mypersonalinformationpage=steps.myAccountPage.clickOnMyPersonalInformation();
	}
}
