package com.steps;

import io.cucumber.java.en.And;

public class CreateAccountPageStepDef {
	
	Steps steps;
	
	public CreateAccountPageStepDef(Steps steps) {
		this.steps=steps;
	}
	
	
	@And("ur enter firstname as \"([^\"]*)\"")
	public void enter_First_Name(String firstName) {
		steps.createAccountPage.enter_FirstName(firstName);

	}
	@And("ur enter lastname as \"([^\"]*)\"")
	public void enter_Last_Name(String lastName )
	{
		steps.createAccountPage.enter_LastName(lastName);
		
	}
	@And("ur enter password as \"([^\"]*)\"")
	public void enter_Password(String password )
	{
		steps.createAccountPage.enter_Password(password);
		
	}
	@And("ur enter address as \"([^\"]*)\" and city as \"([^\"]*)\"")
	public void enterAddressandCity(String address,String city) {
		steps.createAccountPage.enter_Adress(address);
		steps.createAccountPage.enter_City(city);
		
		
	}
	@And("ur select state as \"([^\"]*)\"")
	public void selectState(String state )
	{
		steps.createAccountPage.select_State(state);
	}
	@And("ur enter zipcode as \"([^\"]*)\"")
	public void enter_Zipcode(String zipcode )
	{
		steps.createAccountPage.enter_Zipcode(zipcode);
		
	}
	@And("ur enter phonenumber as \"([^\"]*)\"")
	public void enter_PhoneNumber(String phoneNumber )
	{
		steps.createAccountPage.enter_MobileNo(phoneNumber);
		
	}
	@And("ur enter alias as \"([^\"]*)\"")
	public void enter_AliasName(String alias )
	{
		steps.createAccountPage.enter_Alias(alias);
		
	}
	@And("ur click on register button")
	public void click_RegisterButton( )
	{
		steps.myAccountPage=steps.createAccountPage.click_RegisterButton();
		
	}
	
	  
	 
	
}
