$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/S6652_CreateAccount.feature");
formatter.feature({
  "name": "Verify create account Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify create account Functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "ur enter url",
  "keyword": "When "
});
formatter.step({
  "name": "ur click on signin link",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter emailaddress as \"\u003cemailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur click on create account button",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter firstname as \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter lastname as \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter address as \"\u003caddress\u003e\" and city as \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur select state as \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter zipcode as \"\u003czipcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter phonenumber as \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur enter alias as \"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "ur click on register button",
  "keyword": "And "
});
formatter.step({
  "name": "ur should see account name as \"\u003ccreatedUserName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailAddress",
        "firstName",
        "lastName",
        "password",
        "address",
        "city",
        "state",
        "zipcode",
        "phoneNumber",
        "alias",
        "createdUserName"
      ]
    },
    {
      "cells": [
        "naresh56894@mailinator.com",
        "John",
        "David",
        "john@123",
        "test",
        "test",
        "5",
        "00000",
        "888666566",
        "test",
        "John David"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify create account Functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "TestBaseStepDef.user_Launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter url",
  "keyword": "When "
});
formatter.match({
  "location": "TestBaseStepDef.enter_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur click on signin link",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDef.click_Signin_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter emailaddress as \"naresh56894@mailinator.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.enter_Email_Address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur click on create account button",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.click_Create_Account_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter firstname as \"John\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.enter_First_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter lastname as \"David\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.enter_Last_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter password as \"john@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.enter_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter address as \"test\" and city as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.enterAddressandCity(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur select state as \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.selectState(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter zipcode as \"00000\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.enter_Zipcode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter phonenumber as \"888666566\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.enter_PhoneNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter alias as \"test\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.enter_AliasName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountPageStepDef.click_RegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur should see account name as \"John David\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccoountPageStepDef.verifyUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "change Password scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "name": "ur enter url",
  "keyword": "When "
});
formatter.step({
  "name": "ur click on signin link",
  "keyword": "And "
});
formatter.step({
  "name": "user enter exsiting emailaddress as \"\u003cemailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter extisting password as \"\u003coldPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on sign button",
  "keyword": "And "
});
formatter.step({
  "name": "user click on my personal information link",
  "keyword": "And "
});
formatter.step({
  "name": "use enter current password \"\u003coldPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter new password \"\u003cnewPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user reEnter new password \"\u003cnewPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailAddress",
        "oldPassword",
        "newPassword"
      ]
    },
    {
      "cells": [
        "naresh56894@mailinator.com",
        "john@123",
        "nani66521"
      ]
    }
  ]
});
formatter.scenario({
  "name": "change Password scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "TestBaseStepDef.user_Launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur enter url",
  "keyword": "When "
});
formatter.match({
  "location": "TestBaseStepDef.enter_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ur click on signin link",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDef.click_Signin_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter exsiting emailaddress as \"naresh56894@mailinator.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.user_enter_exsiting_emailaddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter extisting password as \"john@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.user_enter_extisting_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on sign button",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.Click_on_sign_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on my personal information link",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccoountPageStepDef.user_click_my_personal_information_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "use enter current password \"john@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.use_enter_current_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter new password \"nani66521\"",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.user_enter_new_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reEnter new password \"nani66521\"",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.user_enter_confoem_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //a[@class\u003d\u0027login\u0027] (tried for 50 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.utils.WebDriverUtils.click(WebDriverUtils.java:17)\r\n\tat com.pages.LandingPage.clickSigninIn(LandingPage.java:20)\r\n\tat com.steps.LandingPageStepDef.click_Signin_Link(LandingPageStepDef.java:16)\r\n\tat ✽.ur click on signin link(file:src/test/resources/Feature/S6652_CreateAccount.feature:25)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAMADVAITHA\u0027, ip: \u0027192.168.0.50\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\madhu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56462}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2806a3f151aaa11c355cb049f378c9ad\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027login\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.utils.WebDriverUtils.click(WebDriverUtils.java:17)\r\n\tat com.pages.LandingPage.clickSigninIn(LandingPage.java:20)\r\n\tat com.steps.LandingPageStepDef.click_Signin_Link(LandingPageStepDef.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter exsiting emailaddress as \"naresh56893@mailinator.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.user_enter_exsiting_emailaddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter extisting password as \"john@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.user_enter_extisting_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on sign button",
  "keyword": "And "
});
formatter.match({
  "location": "SigninPageStepDef.Click_on_sign_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on my personal information link",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccoountPageStepDef.user_click_my_personal_information_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "use enter current password \"john@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.use_enter_current_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter new password \"nani66521\"",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.user_enter_new_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user reEnter new password \"nani66521\"",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.user_enter_confoem_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "PersonalInformationPageStepDef.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
});