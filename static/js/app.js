let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function buildPanel(params) {
    let PANEL = d3.select("#sample-metadata");
    d3.json(url).then((data) => {
        let dataMeta = data.metadata;
        let results = dataMeta.filter(z => z.id == params)
        let result = results[0]
        PANEL.html("")
        for (key in result) {
            PANEL.append("h5").text(`${key}: ${result[key]}`)

        }

    })
}

function buildCharts(params) {
    d3.json(url).then((data) => {
        let dataMeta = data.metadata;
        let results = dataMeta.filter(z => z.id == params)
        let result = results[0]
    })
}


function optionChanged(x) {
    buildPanel(x);
    buildCharts(x);
}

function init() {
    let dropDown = d3.select("#selDataset");
    d3.json(url).then((data) => {
        console.log(data);
        let dataNames = data.names;

        for (let index = 0; index < dataNames.length; index++) {
            dropDown.append("option").text(dataNames[index]).property("value", dataNames[index]);
        };
        buildPanel(dataNames[0]);
        buildCharts(dataNames[0]);
    })
}
init();