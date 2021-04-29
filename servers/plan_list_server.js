const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();
app.use(cors());

app.use(express.static(__dirname));


app.get('/recommended', function (req, res) {
    res.sendFile(path.join(__dirname, 'recommended_plan.html'));
});
app.get('/list', function (req, res) {
    res.sendFile(path.join(__dirname, 'plan_list.html'));
});
app.get('/page', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/data', function (req, res) {
    res.send([
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
      ]);
});
app.listen(10001);
