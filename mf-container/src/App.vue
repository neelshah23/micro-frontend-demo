<template>
  <div>
    <section class="header">
      <telefonica-recommended-plan
        foregroundColor="#ffffff"
      ></telefonica-recommended-plan>
    </section>
    <section class="plan-wrapper" v-if="planData">
      <div class="plan-container" v-for="plan in planData" :key="plan.id">
        <telefonica-choose-plan
          :title="plan.title"
          :title_extra="plan.title_extra"
          :label1="plan.label1"
          :label2="plan.label2"
          :label3="plan.label3"
          :cost="plan.cost"
          :image="plan.image"
        >
        </telefonica-choose-plan>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      header: "",
      planList: "",
      planData: [],
    };
  },
  components: {},
  methods: {
    fetchData(){
      const scope = this;
      window
          .fetch("http://3.6.8.218/plans/data")
          .then(res => res.json())
          .then(d => {
            scope.planData = d;
          });
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  margin: 20px;
  border-radius: 10px;
}
.plan-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  place-content: center;
}
.plan-container {
  flex: 1 1 30%;
  max-width: 30%;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  margin: 20px;
  border-radius: 10px;
}
</style>
