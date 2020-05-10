import angular from "angular";
import "./root.component.js";
import "./profile.component.js";
import "./account.component.js";

angular.module("app").config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state("root", {
      url: "/",
      template: "<root />",
    })
    .state("profile", {
      url: "/settings",
      template: "<profile />",
    })
    .state("account", {
      url: "/settings/account",
      template: "<account />",
    });

  $locationProvider.html5Mode({ enabled: true, requireBase: false });
});
