d3.json('samples.json').then(data => {
    console.log(data);
})

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
    });
};



// let defaultData = {
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 3, 4, 5]
// }

// function init() {
//     // define data
//     let trace = {
//         x: defaultData.x,
//         y: defaultData.y
//     }
//     let data = [trace]

//     // chart a new plot
//     Plotly.newPlot('bar', data)
// }

// function updatePlotly() {
//     let displayData = event.target.value;
//     console.log("Does this work?");
// }

// event listener to update charts and info box upon changing the drop down selection
// d3.selectAll("#selDataset").on("change", updatePlotly)

init();
// load subjectIDs into dropdown



// let subjectID = Object.keys()
// console.log(subjectID)

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