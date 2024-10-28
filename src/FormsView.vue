<script setup>
import PureForm from "./components/PureForm.vue";
</script>

<template>
  <div class="content">
    <h1 class="content-subhead">Forms</h1>
    <section>
      <h2 class="content-subhead">Default Form</h2>
      <PureForm>
        <fieldset>
          <legend>A compact inline form</legend>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <label for="default-remember">
            <input type="checkbox" id="default-remember" /> Remember me
          </label>
          <button type="submit" class="pure-button pure-button-primary">
            Sign in
          </button>
        </fieldset>
      </PureForm>
    </section>
    <section>
      <h2 class="content-subhead">Stacked Form</h2>
      <PureForm stacked>
        <fieldset>
          <legend>A Stacked Form</legend>
          <label for="stacked-email">Email</label>
          <input type="email" id="stacked-email" placeholder="Email" />
          <span class="pure-form-message">This is a required field.</span>
          <label for="stacked-password">Password</label>
          <input type="password" id="stacked-password" placeholder="Password" />
          <label for="stacked-state">State</label>
          <select id="stacked-state">
            <option>AL</option>
            <option>CA</option>
            <option>IL</option>
          </select>
          <label for="stacked-remember" class="pure-checkbox">
            <input type="checkbox" id="stacked-remember" /> Remember me
          </label>
          <button type="submit" class="pure-button pure-button-primary">
            Sign in
          </button>
        </fieldset>
      </PureForm>
    </section>
    <section>
      <h2 class="content-subhead">Aligned Form</h2>
      <PureForm aligned>
        <fieldset>
          <div class="pure-control-group">
            <label for="aligned-name">Username</label>
            <input type="text" id="aligned-name" placeholder="Username" />
            <span class="pure-form-message-inline"
              >This is a required field.</span
            >
          </div>
          <div class="pure-control-group">
            <label for="aligned-password">Password</label>
            <input
              type="password"
              id="aligned-password"
              placeholder="Password"
            />
          </div>
          <div class="pure-control-group">
            <label for="aligned-email">Email Address</label>
            <input
              type="email"
              id="aligned-email"
              placeholder="Email Address"
            />
          </div>
          <div class="pure-control-group">
            <label for="aligned-foo">Supercalifragilistic Label</label>
            <input
              type="text"
              id="aligned-foo"
              placeholder="Enter something here..."
            />
          </div>
          <div class="pure-controls">
            <label for="aligned-cb" class="pure-checkbox">
              <input type="checkbox" id="aligned-cb" /> I&#x27;ve read the terms
              and conditions
            </label>
            <button type="submit" class="pure-button pure-button-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </PureForm>
    </section>
  </div>
</template>

<style scoped></style>
