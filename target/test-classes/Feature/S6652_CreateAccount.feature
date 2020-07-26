Feature: Verify create account Functionality
Scenario Outline: Verify create account Functionality
Given user launch browser
When ur enter url
And ur click on signin link
And ur enter emailaddress as "<emailAddress>"
And ur click on create account button
And ur enter firstname as "<firstName>"
And ur enter lastname as "<lastName>"
And ur enter password as "<password>"
And ur enter address as "<address>" and city as "<city>"
And ur select state as "<state>"
And ur enter zipcode as "<zipcode>"
And ur enter phonenumber as "<phoneNumber>"
And ur enter alias as "<alias>"
And ur click on register button 
Then ur should see account name as "<createdUserName>"
Examples:
|emailAddress               |firstName|lastName|password |address|city|state|zipcode|phoneNumber|alias|createdUserName|
|naresh56896@mailinator.com|John     |David   |john@123|test   |test|5    |00000  |888666566  |test |John David     |

Scenario Outline: change Password scenario
Given user launch browser
When ur enter url
And ur click on signin link
And user enter exsiting emailaddress as "<emailAddress>"
And user enter extisting password as "<oldPassword>"
And Click on sign button
And user click on my personal information link
And use enter current password "<oldPassword>"
And user enter new password "<newPassword>"
And user reEnter new password "<newPassword>"
And click on save button
#Then user lonin with new password "<newPassword>" and email as "<emailAddress>"
Examples:
|emailAddress	           |oldPassword|newPassword|
|naresh56896@mailinator.com|john@123  |nani66521  |