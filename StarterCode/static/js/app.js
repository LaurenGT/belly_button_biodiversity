// d3.json('samples.json').then(data => {
//     console.log(data);
// })

// on load (function init()), the charts and information is showing for the first person in the list

function init() {
    // access the dropdown menu so we can populate it from the data
    let dropdownMenu = d3.select("#selDataset");
    
    // access json data to pull the names to populate dropdown
    d3.json('samples.json').then(data => {
        // console.log(data);
    
        // access each name from json data and append their value to the options in the dropdownMenu
        data.names.forEach(function(name) {
            dropdownMenu.append("option").text(name).property("value");
        });
        // build out plotting functions to reference here and show the data on load
        getPlotData(data.names[0]);
    });
};

// build out function to gather plot data from json data


// just calling first entry
function getPlotData(sampleID) {
    d3.json('samples.json').then(data => {
        
        let subjectData = data.samples.filter(idData => idData.id === sampleID)[0];
        let sampleValues = subjectData.sample_values;
        let otuIDs = subjectData.otu_ids;
        let otuLabels = subjectData.otu_labels;

        console.log(subjectData)
        // console.log(sampleValues);
        // console.log(otuIDs);
        // console.log(otuLabels);

        // fill the plot
        let trace1 = [{
            type: 'bar',
            x: sampleValues.slice(0,10).reverse(),
            y: otuIDs.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
            orientation: 'h'
        }];

        // let plotData = [trace1]

        Plotly.newPlot('bar',trace1)

    });
};

// // mapping the first entry
// function getPlotData() {
//     d3.json('samples.json').then(data => {
//         // console.log(data);

//         let sampleValues = data.samples[0].sample_values.map( (item, index) => `${index} : ${item}`);
//         let otuIDs = data.samples[0].otu_ids.map( (item, index) => `${index} : ${item}`);
//         let otuLabels = data.samples[0].otu_labels.map( (item, index) => `${index} : ${item}`);;

//         console.log(sampleValues);
//         console.log(otuIDs);
//         console.log(otuLabels);
//     });
// };

// trying to sort all off the arrays by iterating through each line to sort them individually
// was able to sort just one of the arrays but not all of them
// function getPlotData() {
//     // read in json file again and use this access to sort through the data to collect what is needed
//     d3.json('samples.json').then(data => {
//         // console.log(data);
        
//         //START soring of one array ----------------

//         // // let sampleValues = data.samples[0].sample_values;
//         // let otuIDs = 
//         data.samples[0].otu_ids;
//         // // let otuLabels = data.samples.otu_labels[0];

//         // // sort otuIDs descending and slice on the top 10
//         // let sortedOTUID = otuIDs.sort((a,b) => b-a).slice(0,10);
//         // console.log(sortedOTUID)

//         // END sorting of one array -----------------
//         // --------------------------------------------------

//         //just console logging each subject's list of otu_ids
//         // data.samples.forEach(sample => console.log(sample.otu_ids))

//         // for (let j = 0; j < data.samples.length; j++) {
//         //     // console.log(data.samples[j]); // returns an array of each subject's data
//         //     let sorted = data.samples.sort((a,b) => b.otu_ids - a.otu_ids)
//         //     console.log(sorted) // returns all of the data for every iteration
//         // };
        
//         // let sortedSamples = data.samples.sort((a,b) => b.otu_ids - a.otu_ids);
//         // console.log(sortedSamples) // returns all of the data for every iteration
//         console.log(data.samples)
       

//         /* create horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
//             - use sample_values as the values for the bar chart
//             - us otu_ids as the labels for the bar chart
//             - use otu_labels as the hovertext for the chart
//         */

//         // build trace for bar graph
//         // let trace1 = [{
//         //     type: 'bar',
//         //     x: sampleValues,
//         //     y: otuIDs,
//         //     orientation: 'h'
//         // }];
    
//         // // set data
//         // let plotData = [trace1];

//         // // set layout


//         // // Plotly
//         // Plotly.newPlot('bar', plotData);

//     });
// };


function optionChanged(sampleID) {
    getPlotData(sampleID);
};
// event listener to update charts and info box upon changing the drop down selection
// d3.selectAll("#selDataset").on("change", getPlotData)

init();







// // create function to run on change to reflect requested sample
// function getData() {
//     let data = []

//     if (dataset == testsubjectID) {
//         data = ??
//     }

//     updatePlotly(data);
// }