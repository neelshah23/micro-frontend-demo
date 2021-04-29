<template>
  <div>
    <section class="header">
      <telefonica-recommended-plan
        foregroundColor="#ffffff"
      ></telefonica-recommended-plan>
    </section>
    <section class="plan-wrapper">
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
      planData: [
        {
          id: 1,
          title: "50GB",
          title_extra: "40GB",
          label1: "Unlimited minutes and texts",
          label2: "12-month contracts: add more SIMs to save",
          cost: "20",
          label3: "12-month contract",
          image:
            "https://broadbandandphones.co.uk/wp-content/uploads/2020/06/ProductCards-372x120-Big-Sport-F1.jpg",
        },
        {
          id: 2,
          title: "3GB",
          title_extra: "2GB",
          label1: "Unlimited minutes and texts",
          label2: "2-month contracts: add more SIMs to save",
          cost: "3",
          label3: "2-month contract",
          image:
            "https://broadbandandphones.co.uk/wp-content/uploads/2020/06/ProductCards-372x120-Big-Sport-F1.jpg",
        },
        {
          id: 3,
          title: "30GB",
          title_extra: "15GB",
          label1: "Unlimited minutes and texts",
          label2: "12-month contracts: add more SIMs to save",
          cost: "12",
          label3: "12-month contract",
          image:
            "https://broadbandandphones.co.uk/wp-content/uploads/2020/06/ProductCards-372x120-Big-Sport-F1.jpg",
        },
        {
          id: 4,
          title: "50GB",
          title_extra: "40GB",
          label1: "Unlimited minutes and texts",
          label2: "12-month contracts: add more SIMs to save",
          cost: "20",
          label3: "12-month contract",
          image:
            "https://broadbandandphones.co.uk/wp-content/uploads/2020/06/ProductCards-372x120-Big-Sport-F1.jpg",
        },
        {
          id: 5,
          title: "50GB",
          title_extra: "40GB",
          label1: "Unlimited minutes and texts",
          label2: "12-month contracts: add more SIMs to save",
          cost: "20",
          label3: "12-month contract",
          image:
            "https://broadbandandphones.co.uk/wp-content/uploads/2020/06/ProductCards-372x120-Big-Sport-F1.jpg",
        },
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {},
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
