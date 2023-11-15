$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registerAndLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Register and login to bank guru",
  "description": "As a PO\nI want to login to application\nSo that verify login function work properly",
  "id": "register-and-login-to-bank-guru",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@register_and_login"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Register and Login to application",
  "description": "",
  "id": "register-and-login-to-bank-guru;register-and-login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then Click to close popup"
    }
  ],
  "line": 11,
  "name": "I click to here link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I input to email textbox with data \"seleniumjava@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click to submit button at register page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get username",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I get password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I open login page again",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I input to username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input to password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click to login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify Home page displayed with message \"Welcome To Manager\u0027s Page of Guru99 Bank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iOpenLoginPage()"
});
formatter.result({
  "duration": 11488671600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickToHereLink()"
});
formatter.result({
  "duration": 127427200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seleniumjava@gmail.com",
      "offset": 36
    }
  ],
  "location": "RegisterPageSteps.iInputToEmailTextboxWithData(String)"
});
formatter.result({
  "duration": 5013454700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickToSubmitButtonAtRegisterPage()"
});
formatter.result({
  "duration": 2551699400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetUsername()"
});
formatter.result({
  "duration": 60186600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetPassword()"
});
formatter.result({
  "duration": 60682000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iOpenLoginPageAgain()"
});
formatter.result({
  "duration": 965365300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iInputToUsernameTextbox()"
});
formatter.result({
  "duration": 106178700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iInputToPasswordTextbox()"
});
formatter.result({
  "duration": 120007600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickToLoginButton()"
});
formatter.result({
  "duration": 1141054100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome To Manager\u0027s Page of Guru99 Bank",
      "offset": 41
    }
  ],
  "location": "HomePageSteps.verifyHomePageDisplayedWithMessage(String)"
});
formatter.result({
  "duration": 100011600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Add new customer",
  "description": "",
  "id": "register-and-login-to-bank-guru;add-new-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@add_new_customer"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open \"New Customer\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Input to \"Customer Name\" textbox with value \"\u003cCustomer Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Input to \"f\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Input to \"Date of Birth\" textbox with value \"\u003cDob in\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Input to \"Address\" textarea with value \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Input to \"City\" textbox with value \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Input to \"State\" textbox with value \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Input to \"PIN\" textbox with value \"\u003cPIN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Input to \"Mobile Number\" textbox with value \"\u003cMobile Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Input to \"E-mail\" textbox with value \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Input to \"Password\" textbox with value \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click to button \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify Success message displayed \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Verify the valid text displayed at \"Customer Name\" with inputed value \"\u003cCustomer Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the valid text displayed at \"Gender\" with inputed value \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify the valid text displayed at \"Birthdate\" with inputed value \"\u003cDob out\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Verify the valid text displayed at \"Address\" with inputed value \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify the valid text displayed at \"City\" with inputed value \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify the valid text displayed at \"State\" with inputed value \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verify the valid text displayed at \"Pin\" with inputed value \"\u003cPIN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify the valid text displayed at \"Mobile No.\" with inputed value \"\u003cMobile Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify the valid text displayed at \"Email\" with inputed value \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "register-and-login-to-bank-guru;add-new-customer;",
  "rows": [
    {
      "cells": [
        "Customer Name",
        "Dob in",
        "Dob out",
        "Gender",
        "Address",
        "City",
        "State",
        "PIN",
        "Mobile Number",
        "Email",
        "Password"
      ],
      "line": 48,
      "id": "register-and-login-to-bank-guru;add-new-customer;;1"
    },
    {
      "cells": [
        "Customer Name",
        "09/13/1995",
        "1995-09-13",
        "female",
        "An Khanh",
        "Ha Noi",
        "Hoai Duc",
        "345565",
        "0938475733",
        "huy@gmail.com",
        "12345678"
      ],
      "line": 49,
      "id": "register-and-login-to-bank-guru;add-new-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Add new customer",
  "description": "",
  "id": "register-and-login-to-bank-guru;add-new-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@add_new_customer"
    },
    {
      "line": 1,
      "name": "@register_and_login"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open \"New Customer\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Input to \"Customer Name\" textbox with value \"Customer Name\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Input to \"f\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Input to \"Date of Birth\" textbox with value \"09/13/1995\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Input to \"Address\" textarea with value \"An Khanh\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Input to \"City\" textbox with value \"Ha Noi\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Input to \"State\" textbox with value \"Hoai Duc\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Input to \"PIN\" textbox with value \"345565\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Input to \"Mobile Number\" textbox with value \"0938475733\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Input to \"E-mail\" textbox with value \"huy@gmail.com\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Input to \"Password\" textbox with value \"12345678\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click to button \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify Success message displayed \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Verify the valid text displayed at \"Customer Name\" with inputed value \"Customer Name\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the valid text displayed at \"Gender\" with inputed value \"female\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify the valid text displayed at \"Birthdate\" with inputed value \"1995-09-13\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Verify the valid text displayed at \"Address\" with inputed value \"An Khanh\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify the valid text displayed at \"City\" with inputed value \"Ha Noi\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify the valid text displayed at \"State\" with inputed value \"Hoai Duc\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Verify the valid text displayed at \"Pin\" with inputed value \"345565\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify the valid text displayed at \"Mobile No.\" with inputed value \"0938475733\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify the valid text displayed at \"Email\" with inputed value \"huy@gmail.com\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 6
    }
  ],
  "location": "CommonPageSteps.openPage(String)"
});
formatter.result({
  "duration": 673342300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 10
    },
    {
      "val": "Customer Name",
      "offset": 45
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 102989000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "f",
      "offset": 10
    }
  ],
  "location": "CommonPageSteps.inputToRadioButton(String)"
});
formatter.result({
  "duration": 313196800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date of Birth",
      "offset": 10
    },
    {
      "val": "09/13/1995",
      "offset": 45
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 1152527700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address",
      "offset": 10
    },
    {
      "val": "An Khanh",
      "offset": 40
    }
  ],
  "location": "CommonPageSteps.inputToTextareaWithValue(String,String)"
});
formatter.result({
  "duration": 99190100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 10
    },
    {
      "val": "Ha Noi",
      "offset": 36
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 114476400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 10
    },
    {
      "val": "Hoai Duc",
      "offset": 37
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 103671300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN",
      "offset": 10
    },
    {
      "val": "345565",
      "offset": 35
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 84270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Number",
      "offset": 10
    },
    {
      "val": "0938475733",
      "offset": 45
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 94449800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail",
      "offset": 10
    },
    {
      "val": "huy@gmail.com",
      "offset": 38
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 106853100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 10
    },
    {
      "val": "12345678",
      "offset": 40
    }
  ],
  "location": "CommonPageSteps.inputToTextboxWithValue(String,String)"
});
formatter.result({
  "duration": 75373900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 17
    }
  ],
  "location": "CommonPageSteps.clickToButton(String)"
});
formatter.result({
  "duration": 966853500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Registered Successfully!!!",
      "offset": 34
    }
  ],
  "location": "CommonPageSteps.verifySuccessMessageDisplayed(String)"
});
formatter.result({
  "duration": 50021400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Dismissed user prompt dialog: Customer could not be added !!: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VNNOT02422\u0027, ip: \u0027172.16.28.11\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.18\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 119.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20231106151204, moz:geckodriverVersion: 0.33.0, moz:headless: false, moz:platformVersion: 10.0, moz:processID: 26804, moz:profile: C:\\Users\\HUYENP~1\\AppData\\L..., moz:shutdownTimeout: 60000, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6216ef5a-bb6e-4666-a3d5-af516c3bf603\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Customer Registered Successfully!!!\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat commons.BasePage.waitForElementVisible(BasePage.java:473)\r\n\tat pageObjects.CommonPageObject.isDynamicMessageDisplayed(CommonPageObject.java:49)\r\n\tat bankGuru.stepDefinitions.CommonPageSteps.verifySuccessMessageDisplayed(CommonPageSteps.java:58)\r\n\tat ✽.Then Verify Success message displayed \"Customer Registered Successfully!!!\"(registerAndLogin.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 36
    },
    {
      "val": "Customer Name",
      "offset": 71
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gender",
      "offset": 36
    },
    {
      "val": "female",
      "offset": 64
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Birthdate",
      "offset": 36
    },
    {
      "val": "1995-09-13",
      "offset": 67
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Address",
      "offset": 36
    },
    {
      "val": "An Khanh",
      "offset": 65
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 36
    },
    {
      "val": "Ha Noi",
      "offset": 62
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 36
    },
    {
      "val": "Hoai Duc",
      "offset": 63
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pin",
      "offset": 36
    },
    {
      "val": "345565",
      "offset": 61
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile No.",
      "offset": 36
    },
    {
      "val": "0938475733",
      "offset": 68
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 36
    },
    {
      "val": "huy@gmail.com",
      "offset": 63
    }
  ],
  "location": "CommonPageSteps.verifyTheValidTextDisplayedAtWithInputedValue(String,String)"
});
formatter.result({
  "status": "skipped"
});
});