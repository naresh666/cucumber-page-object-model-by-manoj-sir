package com.objectrepo;

import org.openqa.selenium.By;

public interface SigninPageProp {
	By emailLocator=By.id("email_create");
	By createAccountLocator=By.id("SubmitCreate");
	By RegisterEmailLocator=By.id("email");
	By RegisterPasswordLocator=By.id("passwd");
	By SigninButtonLocator=By.id("SubmitLogin");

}
