import angular from "angular";
import "./root.component.js";
import "./subroute1.component.js";
import "./subroute2.component.js";

angular.module("app").config(($stateProvider, $locationProvider) => {
  $stateProvider
    .state("root", {
      url: "/",
      template: "<root />",
    })
    .state("one", {
      url: "/settings/subroute1",
      template: "<subroute1 />",
    })
    .state("two", {
      url: "/settings/subroute2",
      template: "<subroute2 />",
    });

  $locationProvider.html5Mode({ enabled: true, requireBase: false });
});
