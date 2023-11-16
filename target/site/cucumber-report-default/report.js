$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginWithoutParam.feature");
formatter.feature({
  "line": 2,
  "name": "Login without param",
  "description": "",
  "id": "login-without-param",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login_01"
    }
  ]
});
formatter.before({
  "duration": 6172043300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#\tBackground: Open facebook application"
    }
  ],
  "line": 7,
  "name": "Verify login page display",
  "description": "",
  "id": "login-without-param;verify-login-page-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@displayed"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Given Open facebook application"
    }
  ],
  "line": 9,
  "name": "Verify email textbox is display",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify password textbox is display",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.verifyEmailTextboxIsDisplay()"
});
formatter.result({
  "duration": 166033300,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.verifyPasswordTextboxIsDisplay()"
});
formatter.result({
  "duration": 50772401,
  "status": "passed"
});
formatter.after({
  "duration": 266979901,
  "status": "passed"
});
formatter.before({
  "duration": 1890746500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#And Close application"
    }
  ],
  "line": 14,
  "name": "Verify login with Username",
  "description": "",
  "id": "login-without-param;verify-login-with-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@login_without_param"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#\tGiven Open facebook application"
    }
  ],
  "line": 16,
  "name": "Input to email textbox",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Input to password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click to login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToEmailTextbox()"
});
formatter.result({
  "duration": 200570701,
  "status": "passed"
}formatter.result({
  "duration": 5862530401,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickToSubmitButtonAtRegisterPage()"
});
formatter.result({
  "duration": 2791106600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetUsername()"
});
formatter.result({
  "duration": 49253900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iGetPassword()"
});
formatter.result({
  "duration": 60285199,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iOpenLoginPageAgain()"
});
formatter.result({
  "duration": 935064799,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iInputToUsernameTextbox()"
});
formatter.result({
  "duration": 128633901,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iInputToPasswordTextbox()"
});
formatter.result({
  "duration": 100037500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickToLoginButton()"
});
formatter.result({
  "duration": 1175448500,
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
  "duration": 83578100,
  "status": "passed"
});
});