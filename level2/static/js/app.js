
// YOUR CODE HERE!
// from data.js
// from data.js
const tableData = data;
/*  datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."*/

// YOUR CODE HERE!


//select all tbody tags for table construction
//use const to make this a forever variable
const tbody = d3.select("tbody");

//create function to create a table based on data
function table(data){
  //clear out old html built into to the tbody tag
  tbody.html("");

  //loop through each row of data and append a table row to hold the data
  data.forEach((dataRow) => {
    const row = tbody.append("tr");
    
    //call the object "dataRow" and loop through each value and append to new table cell
    Object.values(dataRow).forEach((entry) => {
      let columndata = row.append("td");
        columndata.text(entry);
      }
    );
  });
}

//create function to filter data based on user input
function searchable(){ 
  
  //make a variable that is the value property from the filter box
  //value is property of input tag
  const input = d3.select("#datetime").property("value");
  
  //if there is an input, filter the data
  if(input){

  
    filtered = tableData.filter(row => row.datetime === input);
  }

  //run the table function on filtered data to build filtered table
  table(filtered);
}

//listener to execute filtered table creation
d3.selectAll("#filter-btn").on("click", searchable);

//base table to initial load
table(tableData);

