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
            orientation: 'h',
            
        }];

        Plotly.newPlot('bar',trace1)

        let trace2 = [{
            x: otuIDs,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: { 
                size: sampleValues,
                color: otuIDs,
            }
        }]

        Plotly.newPlot('bubble', trace2)

    });
};


function optionChanged(sampleID) {
    getPlotData(sampleID);
};

init();

