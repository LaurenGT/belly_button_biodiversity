// build out init function to run on load with the first sample entry
function init() {
    // access the dropdown menu so we can populate it from the data
    let dropdownMenu = d3.select("#selDataset");
    
    // access json data to pull the names to populate dropdown
    d3.json('samples.json').then(data => {
    
        // access each name from json data and append their value to the options in the dropdownMenu
        data.names.forEach(function(name) {
            dropdownMenu.append("option").text(name).property("value");
        });
        // reference lower functions here and show the data on load
        getPlotData(data.names[0]);
        getMetaData(data.names[0])
    });
};

// build out function to gather plot data from json data
function getPlotData(sampleID) {
    // access json file
    d3.json('samples.json').then(data => {
        
        // access and collect the samples data
        let subjectData = data.samples.filter(idData => idData.id === sampleID)[0];
        let sampleValues = subjectData.sample_values;
        let otuIDs = subjectData.otu_ids;
        let otuLabels = subjectData.otu_labels;

        // build out bar chart
        let trace1 = [{
            type: 'bar',
            x: sampleValues.slice(0,10).reverse(),
            y: otuIDs.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
            orientation: 'h',
            text: otuLabels
        }];

        let barLayout = {
            title: "Abundance of Microbial 'Species' (OTU)"
        }

        Plotly.newPlot('bar',trace1, barLayout
        )

        // build out bubble chart
        let trace2 = [{
            x: otuIDs,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: { 
                size: sampleValues,
                color: otuIDs
            },
            text: otuLabels,
            
        }]

        let bubbleLayout = {
            title: "Abundance of Microbial 'Species' (OTU)"
        }

        Plotly.newPlot('bubble', trace2, bubbleLayout)
    });
};

// build function to gather demographic data
function getMetaData(sampleID) {
    // access the json file
    d3.json('samples.json').then(data => {
    // access the metadata within the json file and filter on ID
    let metaData = data.metadata
    let filterResult = metaData.filter(sampleObj => sampleObj.id == sampleID);
    let result = filterResult[0];
    let wfreq = result.wfreq;
    // console.log(filterResult)
    // console.log(wfreq)

    // select the HTML section the panel is held in
    let panel = d3.select("#sample-metadata")
    // clear any current data
    panel.html("")
    // populate the demographics panel
    Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });

    //build gauge chart
    let trace3 = [{
        value: wfreq,
        title: { text: "Washing Frequency"},
        type: "indicator",
        mode: "gauge+number",
        gauge:{ axis: { range: [0,9] } }
    }]

    let gaugeLayout = {
        width: 600,
        height:400
    }

    Plotly.newPlot('gauge', trace3, gaugeLayout)

    });
};

// build formula to match the referenced formula in HTML code to update charts when subject Id is changed
function optionChanged(sampleID) {
    getPlotData(sampleID);
    getMetaData(sampleID);
};

init();

