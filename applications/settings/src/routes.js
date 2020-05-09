import angular from "angular";
import "./root.component.js";
import "./subroute1.component.js";
import "./subroute2.component.js";

angular.module("app").config(($stateProvider, $locationProvider) => {
  console.log("Loading Routes");

  // make sure angular does not rewrite our urls, since they are set by the portal
  //   $locationProvider.hashPrefix("");
  //   $locationProvider.html5Mode({
  //     enabled: false,
  //     requireBase: false,
  //   });

  //   $stateProvider.state({
  //     name: "root",
  //     url: "/settings",
  //     template: "<root />",
  //     // template: "<p>HELLO!</p>",
  //   });

  $stateProvider
    .state("root", {
      url: "/settings",
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
});
