$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginWithParams.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook login page with params",
  "description": "",
  "id": "facebook-login-page-with-params",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login_02"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify login with Username",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login_with_param"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tGiven Open facebook application"
    }
  ],
  "line": 7,
  "name": "Input to email textbox with \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Input to password textbox with \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click to login button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#\tAnd Close application"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "facebook-login-page-with-params;verify-login-with-username;;1"
    },
    {
      "cells": [
        "huyenpt@gmail.com",
        "123456789"
      ],
      "line": 14,
      "id": "facebook-login-page-with-params;verify-login-with-username;;2"
    },
    {
      "cells": [
        "huy@gmail.com",
        "12345678"
      ],
      "line": 15,
      "id": "facebook-login-page-with-params;verify-login-with-username;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2722558200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify login with Username",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login_with_param"
    },
    {
      "line": 1,
      "name": "@login_02"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tGiven Open facebook application"
    }
  ],
  "line": 7,
  "name": "Input to email textbox with \"huyenpt@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Input to password textbox with \"123456789\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click to login button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "huyenpt@gmail.com",
      "offset": 29
    }
  ],
  "location": "FacebookSteps.inputToEmailTextboxWith(String)"
});
formatter.result({
  "duration": 176380500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 32
    }
  ],
  "location": "FacebookSteps.inputToPasswordTextboxWith(String)"
});
formatter.result({
  "duration": 114624900,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToLoginButton()"
});
formatter.result({
  "duration": 67763800,
  "status": "passed"
});
formatter.after({
  "duration": 147383800,
  "status": "passed"
});
formatter.before({
  "duration": 1673856800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify login with Username",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login_with_param"
    },
    {
      "line": 1,
      "name": "@login_02"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\tGiven Open facebook application"
    }
  ],
  "line": 7,
  "name": "Input to email textbox with \"huy@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Input to password textbox with \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click to login button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "huy@gmail.com",
      "offset": 29
    }
  ],
  "location": "FacebookSteps.inputToEmailTextboxWith(String)"
});
formatter.result({
  "duration": 114291400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 32
    }
  ],
  "location": "FacebookSteps.inputToPasswordTextboxWith(String)"
});
formatter.result({
  "duration": 100735900,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToLoginButton()"
});
formatter.result({
  "duration": 60067300,
  "status": "passed"
});
formatter.after({
  "duration": 206600900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify login with Username",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@login_datatable_step"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#\tGiven Open facebook application"
    }
  ],
  "line": 21,
  "name": "Input to username and password textbox",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 22
    },
    {
      "cells": [
        "\u003cUsername\u003e",
        "\u003cPassword\u003e"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Click to login button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#\tAnd Close application"
    }
  ],
  "line": 27,
  "name": "",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 28,
      "id": "facebook-login-page-with-params;verify-login-with-username;;1"
    },
    {
      "cells": [
        "huyenpt@gmail.com",
        "123456789"
      ],
      "line": 29,
      "id": "facebook-login-page-with-params;verify-login-with-username;;2"
    },
    {
      "cells": [
        "huy@gmail.com",
        "12345678"
      ],
      "line": 30,
      "id": "facebook-login-page-with-params;verify-login-with-username;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1596184100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify login with Username",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@login_datatable_step"
    },
    {
      "line": 1,
      "name": "@login_02"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#\tGiven Open facebook application"
    }
  ],
  "line": 21,
  "name": "Input to username and password textbox",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 22
    },
    {
      "cells": [
        "huyenpt@gmail.com",
        "123456789"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Click to login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPasswordTextbox(DataTable)"
});
formatter.result({
  "duration": 264467600,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToLoginButton()"
});
formatter.result({
  "duration": 74844200,
  "status": "passed"
});
formatter.after({
  "duration": 127854100,
  "status": "passed"
});
formatter.before({
  "duration": 1709174100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify login with Username",
  "description": "",
  "id": "facebook-login-page-with-params;verify-login-with-username;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@login_datatable_step"
    },
    {
      "line": 1,
      "name": "@login_02"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#\tGiven Open facebook application"
    }
  ],
  "line": 21,
  "name": "Input to username and password textbox",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 22
    },
    {
      "cells": [
        "huy@gmail.com",
        "12345678"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Click to login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPasswordTextbox(DataTable)"
});
formatter.result({
  "duration": 271224400,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToLoginButton()"
});
formatter.result({
  "duration": 60820700,
  "status": "passed"
});
formatter.after({
  "duration": 130884200,
  "status": "passed"
});
formatter.uri("loginWithoutParam.feature");
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
  "duration": 1620151300,
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
  "duration": 57124500,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.verifyPasswordTextboxIsDisplay()"
});
formatter.result({
  "duration": 27021400,
  "status": "passed"
});
formatter.after({
  "duration": 116292500,
  "status": "passed"
});
formatter.before({
  "duration": 1654981300,
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
  "duration": 129669000,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.inputToPasswordTextbox()"
});
formatter.result({
  "duration": 135248700,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToLoginButton()"
});
formatter.result({
  "duration": 85181200,
  "status": "passed"
});
formatter.after({
  "duration": 163796800,
  "status": "passed"
});
});