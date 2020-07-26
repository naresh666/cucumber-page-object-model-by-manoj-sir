package com.pages;

import org.openqa.selenium.WebDriver;

import com.objectrepo.PersonalInfoPafeProp;
import com.utils.WebDriverUtils;

public class MyPersonalInformaionPage extends WebDriverUtils implements PersonalInfoPafeProp {
	WebDriver driver;
	public MyPersonalInformaionPage(WebDriver driver) {
		super(driver);
		this.driver=driver;
	}
	public void enterOldPassword(String oldPassword) {
		enterText(OLD_Password_Locator, oldPassword);
	}
	public void enterNewPassword(String newPassword) {
		enterText(NEW_PASSWORD_LOCATOR, newPassword);
		
	}
	public void reEnterNewPassword(String ReEnterNewPassword) {
		enterText(REENTER_NEWpASSWORD_LOCATOR, ReEnterNewPassword);
		
	}
	public MyPersonalInformaionPage saveNewPasswordButton() {
		click(SAVE_LOCATOR);
		return new MyPersonalInformaionPage(driver);
	}
	

}
