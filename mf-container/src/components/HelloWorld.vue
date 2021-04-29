<template>
  <section class="decide_recos">
    <!--#include virtual="/plans/recommended" -->
  </section>
  <section class="plan-wrapper">
    <!--#include virtual="/plans/list" -->
    <iauro-input title="x"></iauro-input>
  </section>
</template>

<script>

export default {
  name: 'App',
  data(){return {
    header: '',
    planList: '',
    planData: [{id:1},{id:2},{id:3},{id:4},{id:5}]
  }},
  components: {

  },
  methods: {
    load(){
      this.fetch_recommended_plan();
      this.fetch_plans();
      // this.fetct_by_include();
    },
    fetch_recommended_plan() {
      const scope = this;
      window
          .fetch("http://localhost:8080/plans/recommended")
          .then(res => res.text())
          .then(html => {
            scope.header = html;
          });
    },
    fetch_plans() {
      const scope = this;
      window
          .fetch("http://localhost:8080/plans/list")
          .then(res => res.text())
          .then(html => {
            scope.planList = html;
          });
    },
    fetct_by_include(){
      const element = document.querySelector(".decide_recos");
      // const url = element.getAttribute("data-fragment");

      window
          .fetch("/plans/recommended")
          .then(res => res.text())
          .then(html => {
            element.innerHTML = html;
          });
    }
  },
  mounted(){
    this.load();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);
  margin: 20px;
  border-radius: 10px;
}
.plan-wrapper{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  place-content: center;

}
.plan-container{
  flex: 1 1 30%;
  max-width: 30%;
  box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);
  margin: 20px;
  border-radius: 10px;

}
</style>
