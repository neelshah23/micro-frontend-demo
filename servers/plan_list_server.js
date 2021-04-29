const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();

const data = [
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
  ];
app.use(cors());

app.use(express.static(__dirname));


app.get('/recommended', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send("<telefonica-recommended-plan></telefonica-recommended-plan>");
});
app.get('/list', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send(getPlanList());
    //res.sendFile(path.join(__dirname, 'plan_list.html'));
});
app.get('/page', function (req, res) {
    res.send(path.join(__dirname, 'index.html'));
});
app.get('/data', function (req, res) {
    res.send(data);
});

const getPlanList = () => {
    let html = ``;
    for (let i=0; i < data.length; i++) {
        let plan = data[i];
        html += `
        <div class="plan-container">
        <telefonica-choose-plan
          title="${plan.title}"
          title_extra="${plan.title_extra}"
          label1="${plan.label1}"
          label2="${plan.label2}"
          label3="${plan.label3}"
          cost="${plan.cost}"
          image="${plan.image}"
        >
        </telefonica-choose-plan></div>`
    }
    return html;
    
}
app.listen(10001);
