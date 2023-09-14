let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//build panel
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

//build the charts
function buildCharts(params) {
    d3.json(url).then((data) => {
        let dataSample = data.samples;
        let results = dataSample.filter(z => z.id == params)
        let result = results[0];
        let sample_values = result.sample_values;
        let otu_ids = results.otu_ids;
        let otu_labels = results.otu_labels;
        // console.log(dataSample)
    })
};
//bubble chart
// let bubbleLayout = {
//     title: "Bacteria Cultures per Sample",
//     margin: { t: 0 },
//     hovermode: 'closest',
//     xaxis: { title: "OTU ID" },
//     margin: { t: 30 }
// };
// let bubbleData = [
//     {
//         x: otu_ids,
//         y: sample_values,
//         text: otu_labels,
//         mode: "markers",
//         marker: {
//             size: sample_values,
//             color: otu_ids,
//             colorscale: "Earth"
//         }
//     }
// ];
// Plotly.newPlot("bubble", bubbleData, bubbleLayout);


//bar chart
// let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
// let barData = [
//     {
//         x: sample.values.slice(0, 10).reverse(),
//         y: yticks,
//         text: otu_labels.slice(0, 10).reverse(),
//         type: "bar",
//         orientation: "h",
//     }
// ];
// let barLayout = {
//     title: "Top 10 Bacteria Cultures Found",
//     margin: { t: 30, l: 150 }
// };

// Plotly.newPlot("bar", barData, barLayout);




function optionChanged(x) {
    buildPanel(x);
    buildCharts(x);
}

//initialize the subjectID dropdown menu
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