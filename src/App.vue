<template>
    <div id="app">
        <nav>
            <li><router-link :to = "{ name: 'home' }">Insura Block</router-link></li>
            <li><router-link :to = "{ name: 'signup', params: {type: 'medical-professional'} }">Medical Professionals</router-link></li>
            <!-- <li><router-link :to = "{ name: 'signup', params: {type: 'patient'} }">Patients</router-link></li> -->
            <li><router-link :to = "{ name: 'insurancePlan' }">Patients</router-link></li>
        </nav>

        <router-view/>

        <footer>
        </footer>
    </div>
</template>

<style>
:root {
    --primary-light: lightblue;
    --primary: blue;
    --primary-dark: black;

    --secondary: pink;

    --white: white;
    --black: black;

    --accent1: red;
    --accent2: green;
}

body {
    margin: 0;
    padding: 0;
}

div#app > div:not(.full) {
    padding: 2em;
}

section#hero {
    background: var(--primary);
    color: var(--white);
    min-height: 20vh;
    padding: 2em;
}

nav {
    background: var(--primary-dark);
    color: var(--secondary);
    padding: 2em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(10, auto);
}
nav li {
    display: inline-block;
}

nav a {
    color: var(--white);
    text-decoration: none;
    font-size: 1.3rem;
}

label {
    display: block;
    margin: 1.5em auto 0.5em auto;
}
input[type='text'],
input[type='number'] {
    padding: 0.8em;
}

input[type=submit] {
    margin-top: 2em;
    display: block;
    padding: 0.5em;
}
</style>
