// read in samples.json
function unpack(rows, index) {
    return rows.map(function(row) {
        return row[index];
    });
}

function studyData() {
    d3.json('samples.json').then(data => {
        console.log(data);
        let subjectID = unpack(data.dataset.data, 0)
        console.log(subjectID)
})
}

// on load (function init()), the charts and information is showing for the first person in the list

// load subjectIDs into dropdown



// let subjectID = Object.keys()
// console.log(subjectID)

/* create horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
    - use sample_values as the values for the bar chart
    - us otu_ids as the labels for the bar chart
    - use otu_labels as the hovertext for the chart
*/


// event listener to update charts and info box upon changing the drop down selection
// d3.selectAll("#selDataset").on("change", getData)


// // create function to run on change to reflect requested sample
// function getData() {
//     let data = []

//     if (dataset == testsubjectID) {
//         data = ??
//     }

//     updatePlotly(data);
// }