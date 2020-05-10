import angular from "angular";

angular.module("app").component("profile", {
  template: `<h1 class="h3">Profile Page</h1>`,
  controllerAs: "vm",
  controller() {
    const vm = this;
  },
});
