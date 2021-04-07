// d3.json('samples.json').then(data => {
//     console.log(data);
// })

// on load (function init()), the charts and information is showing for the first person in the list

function init() {
    // access the dropdown menu so we can populate it from the data
    let dropdownMenu = d3.select("#selDataset");
    
    // access json data to pull the names to populate dropdown
    d3.json('samples.json').then(data => {
        console.log(data);
    
        // access each name from json data and append their value to the options in the dropdownMenu
        data.names.forEach(function(name) {
            dropdownMenu.append("option").text(name).property("value");
        });
        // build out plotting functions to reference here and show the data on load
    });
};

// build out function to gather plot data from json data
function getPlotData() {
    // read in json file again and use this access to sort through the data to collect what is needed
    d3.json('samples.json').then(data => {
        console.log(data);

        // set variables for data that needs to be collected from json
        let sample_values = data.samples[0].sample_values;
        let otu_ids = data.samples[0].otu_ids;
        let otu_labels = data.samples[0].otu_labels;

        // console.log to check values
        console.log(sample_values);
        console.log(otu_ids);
        console.log(otu_labels);

    // build trace for bar graph
        // let trace1 = 
    // set data

    // set layout

    // Plotly
    });
};

getPlotData();
// event listener to update charts and info box upon changing the drop down selection
// d3.selectAll("#selDataset").on("change", getPlotData)

init();

/* create horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
    - use sample_values as the values for the bar chart
    - us otu_ids as the labels for the bar chart
    - use otu_labels as the hovertext for the chart
*/





// // create function to run on change to reflect requested sample
// function getData() {
//     let data = []

//     if (dataset == testsubjectID) {
//         data = ??
//     }

//     updatePlotly(data);
// }