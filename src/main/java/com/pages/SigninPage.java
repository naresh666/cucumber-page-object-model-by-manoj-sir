package com.pages;

import org.openqa.selenium.WebDriver;

import com.objectrepo.SigninPageProp;
import com.utils.WebDriverUtils;

public class SigninPage extends WebDriverUtils implements SigninPageProp {

	WebDriver driver;
	public SigninPage(WebDriver driver) {
		super(driver);
		this.driver=driver;
	}

	public void enterNewEmailAddrss(String emailAddress) {
		enterText(emailLocator, emailAddress);
		
	}
	
	public CreateAccountPage clickCreateAccountButton() {
		click(createAccountLocator);
		return new CreateAccountPage(driver);
	}
	public void enterRegisterdEmailaddress(String email) {
		enterText(RegisterEmailLocator, email);
	}
	public void enterRegisterdPassword(String password) {
		enterText(RegisterPasswordLocator, password);
	}
	public MyAccountPage clickOnSignIn() {
		click(SigninButtonLocator);
		return new MyAccountPage(driver);
	}
}
