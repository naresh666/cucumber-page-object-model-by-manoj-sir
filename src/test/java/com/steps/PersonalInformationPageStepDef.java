package com.steps;

import io.cucumber.java.en.And;

public class PersonalInformationPageStepDef {
	Steps steps;
	public PersonalInformationPageStepDef(Steps steps) {
		this.steps=steps;
	}
	@And("use enter current password \"([^\"]*)\"")
	public void use_enter_current_password(String oldPassword) {
		steps.mypersonalinformationpage.enterOldPassword(oldPassword);
	}
	@And("user enter new password \"([^\"]*)\"")
	public void user_enter_new_password(String newPassword) {
		steps.mypersonalinformationpage.enterNewPassword(newPassword);
	}
	
	@And("user reEnter new password \"([^\"]*)\"")
	public void user_enter_confoem_password(String ReEnterPassword) {
		//steps.mypersonalinformationpage.saveNewPasswordButton();
		steps.mypersonalinformationpage.reEnterNewPassword(ReEnterPassword);
	}
	@And("click on save button")
	public void click_on_save_button() {
		steps.mypersonalinformationpage.saveNewPasswordButton();
	}

}
