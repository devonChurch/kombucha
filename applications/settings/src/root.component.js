import angular from "angular";

angular.module("app").component("root", {
  template: `
<div class="container">
    <div class="card">
        <div class="card-body">
            <div class="alert alert-danger">
                Angular Application
            </div>

            <nav class="navbar navbar-light mb-3 bg-light">
                <span class="navbar-brand flex-grow-1">Settings</span>
                <!-- -->
                <a ui-sref="profile" class="nav-link">Profile</a>
                <a ui-sref="account" class="nav-link">Account</a>
            </nav>
            
            <div>
                <ui-view></ui-view>
            </div>
            
        </div>
    </div>
</div>
`,
  controllerAs: "vm",
  controller($timeout) {
    const vm = this;
  },
});
