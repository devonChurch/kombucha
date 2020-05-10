<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="alert alert-success">
          Vue Application
        </div>

        <nav class="navbar navbar-light mb-3 bg-light">
          <span class="navbar-brand flex-grow-1">Products</span>
          <!-- -->
          <router-link to="/" class="nav-link">Listings</router-link>
          <router-link to="/purchases" class="nav-link">Purchases</router-link>
        </nav>

        <div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
