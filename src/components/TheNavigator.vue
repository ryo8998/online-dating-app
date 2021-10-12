<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand href="#">Online Dating App</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/message-list">Message List</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
 nav{
  position: relative;
 }
</style>