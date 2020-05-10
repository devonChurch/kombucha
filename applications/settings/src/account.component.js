import angular from "angular";

angular.module("app").component("account", {
  template: `<h1 class="h3">Account Page</h1>`,
  controllerAs: "vm",
  controller() {
    const vm = this;
  },
});
