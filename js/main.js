//data
const manor = [
  {
    name: "Duvel",
    price: "2.60",
    volume: "300ml",
    type: "Ale",
  },
  {
    name: "Warsteiner",
    price: "1.60",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Warsteiner",
    price: "1.85",
    volume: "330ml",
    type: "Alc. free",
  },
  {
    name: "Pietra",
    price: "2.94",
    volume: "330ml",
    type: "Lager",

  },
  {
    name: "Brlo, C4PO West Coast",
    price: "3.90",
    volume: "330ml",
    type: "IPA",

  },
  {
    name: "Coopers",
    price: "2.95",
    volume: "330ml",
    type: "Ale",

  },
  {
    name: "WESTMALLE",
    price: "4.20",
    volume: "330ml",
    type: "Lager",

  },
  {
    name: "Porn star",
    price: "3.50",
    volume: "330ml",
    type: "IPA",
  },
  {
    name: "Trooper",
    price: "2.95",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "GRIMBERGEN",
    price: "1.95",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Peroni",
    price: "2.20",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Chimay",
    price: "3.75",
    volume: "330ml",
    type: "Ale" 
  },
  {
    name: "Liefmans",
    price: "9.00",
    volume: "750ml",
    type: "Ale",
  },
  {
    name: "LIEFMANS",
    price: "3.50",
    volume: "250ml",
    type: "Ale",
  },
  {
    name: "Wanderlust",
    price: "3.40",
    volume: "330ml",
    type: "Ale",
  },

  {
    name: "Corporate Monkey",
    price: "3.40",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Oh IPA",
    price: "3.80",
    volume: "330ml",
    type: "IPA"
  },
  {
    name: "Brewdog",
    price: "2.95",
    volume: "500ml",
    type: "IPA"
  },
  {
    name: "Riegele, Augustus 8",
    price: "6.70",
    volume: "660ml",
    type: "Ale"
  },
  {
    name: "Riegele, Ator 20",
    price: "6.70",
    volume: "660ml",
    type: "Ale"
  },
  {
    name: "Riegele, Simco 3",
    price: "6.70",
    volume: "660ml",
    type: "Ale"
  },
  {
    name: "Stroud Brewery, Tom Long",
    price: "4.90",
    volume: "500ml",
    type: "Ale"

  },
  {
    name: "Officina Della Birra",
    price: "3.90",
    volume: "330ml",
    type: "IPA",
  },
  {
    name: "Desperados",
    price: "2.80",
    volume: "330ml",
    type: "N/A",
  },
  {
    name: "Guinness",
    price: "3.00",
    volume: "330ml",
    type: "Ale",
  },
  {
    name: "La Chouffe",
    price: "3.60",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Chouffe",
    price: "3.90",
    volume: "330ml",
    type: "Ale",
  },
  {
    name: "Chimay",
    price: "3.75",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Insel Kreide",
    price: "3.90",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Grosse Bertha",
    price: "3.90",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Bellerose ",
    price: "3.90",
    volume: "330ml",
    type: "IPA",
  },
  {
    name: "1664",
    price: "1.00",
    volume: "250ml",
    type: "Lager",
  },
  {
    name: "SWAF ",
    price: "2.20",
    volume: "500ml",
    type: "Lager",
  },
  {
    name: "La Trappe",
    price: "3.80",
    volume: "330ml",
    type: "Triple Ale",
  },
  {
    name: "Shepherd Neame",
    price: "4.95",
    volume: "500ml",
    type: "Ale"
  },
  {
    name: "White Frontier, Log-out & Live",
    price: "3.30",
    volume: "330ml",
    type: "Ale",
  },
  {
    name: "White Frontier, Petite",
    price: "3.30",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "White Frontier, Amor Fati",
    price: "3.90",
    volume: "330ml",
    type: "Ale",
  },
  {
    name: "Baladin",
    price: "4.50",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Brasserie Dupont, Hirond'Ale",
    price: "4.20",
    volume: "330",
    type: "Ale",
  },
  {
    name: "Stone BUENAVEZA SALT & LIME LAGER",
    price: "3.40",
    volume: "330",
    type: "Lager",
  },
  {
    name: "Quöllfrisch naturtrüb",
    price: "1.87",
    volume: "500ml",
    type: "Lager"
  },
  {
    name: "Corona",
    price: "1.95",
    volume: "330ml",
    type: "Lager", 
  },
  {
    name: "LINDEMANS",
    price: "3.30",
    volume: "250ml",
    type: "Ale", 
  },
  {
    name: "LA NEBULEUSE",
    price: "3.95",
    volume: "330ml",
    type: "IPA", 
  },
  {
    name: "DELIRIUM",
    price: "9.90",
    volume: "750ml",
    type: "IPA", 
  },
  {
    name: "Rasta, Trolls",
    price: "3.50",
    volume: "330ml",
    type: "Lager", 
  },
  {
    name: "Bombardier",
    price: "2.80",
    volume: "330ml",
    type: "Lager",
  },
  {
    name: "Wychwood",
    price: "5.30",
    volume: "500ml",
    type: "Ale"
  },
  {
    name: "BOXER",
    price: "1.20",
    volume: "250ml",
    type: "Lager",
  },
  {
    name: "Estrella Damm",
    price: "2.30",
    volume: "330ml",
    type: "Lager",
  },

];
const coop = [
  {
    name: "Augustiner Light Lager Beer",
    price: "2.60",
    volume: "500ml",
    type: "Lager"
  },
  {
    name: "BFM La Meule Bière à la sauge",
    price: "4.80",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "BFM La Salamandre Bier blanche",
    price: "4.80",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Egger Spez Maximus Beer",
    price: "1.50",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Guinness Hop House 13 Lager Beer",
    price: "2.95",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Kirin Ichiban Japan Beer",
    price: "2.50",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Peroni Bier Nastro Azzurro",
    price: "1.90",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Pilgrim Waldbier Beer",
    price: "2.80",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Rugenbräu Alpenperle Beer",
    price: "1.40",
    volume: "330cl",
    type: "Ale"
  },
  {
    name: "San Martino La Helles Beer",
    price: "2.30",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "San Martino La Nostra Beer",
    price: "2.30",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "San Martino Ticino Beer",
    price: "2.40",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Ueli Light Lager Beer",
    price: "1.60",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Aare Amber Beer",
    price: "1.85",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Aare Kellerfrisch Lager Beer",
    price: "1.85",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Appenzeller bière de tonneau en bois",
    price: "2.95",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Appenzeller Quöllfrisch Beer",
    price: "1.20",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Appenzeller Quöllfrisch Beer",
    price: "1.2",
    volume: "250ml",
    type: "Lager"
  },
  {
    name: "BFM Saison Surette Sour Beer",
    price: "5.90",
    volume: "375ml",
    type: "Ale"
  },
  {
    name: "Bier Factory Corp Monkey Lager",
    price: "3.95",
    volume: "330ml",
    type: "Lager"

  },
  {
    name: "Blanche de Namur Rosée Beer",
    price: "5.95",
    volume: "750ml",
    type: "Ale"
  },
  {
    name: "Bourgogne des Flandres Beer",
    price: "1.95",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Boxer Brunette Beer",
    price: "1.95",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Boxer Gourmande Beer",
    price: "1.95",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Boxer Old Beer",
    price: "0.95",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Boxer Vedette Beer",
    price: "1.95",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Brooklyn Lager Beer",
    price: "2.80",
    volume: "350ml",
    type: "Lager"
  },
  {
    name: "Calanda Glatsch Beer",
    price: "1.30",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Cardinal non filtered",
    price: "1.25",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Chopfab White Beer",
    price: "1.29",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Coors Light Beer",
    price: "2.40",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "De Molen Hugs & Kisses Beer",
    price: "3.50",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "De Molen Rasputin Beer",
    price: "4.50",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "De Molen Vuur & Vlam Beer",
    price: "3.95",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Docteur Gab's Pépite PA Beer",
    price: "3.50",
    volume: "330ml",
    type: "IPA"
  },
  {
    name: "Doppelleu Double IPA Beer",
    price: "2.95",
    volume: "330ml",
    type: "IPA"
  },
  {
    name: "Duvel Belgian Beer",
    price: "3.50",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Eichhof Lager Beer",
    price: "1.90",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Eichhof Retro Beer",
    price: "0.90",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Eichhof Urfrisch Beer",
    price: "1.20",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Einsiedler Organic Alpen Beer",
    price: "1.90",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Feldschlösschen Win a Car Original Beer",
    price: "0.80",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Felsenau Bärner Müntschi Beer",
    price: "1.90",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Gluten Free Birra da Ris Beer",
    price: "1.62",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Grimbergen Blanche Beer",
    price: "1.90",
    volume: "250cl",
    type: "Ale"
  },
  {
    name: "Heineken Beer",
    price: "0.66",
    volume: "250ml",
    type: "Lager"
  },
  {
    name: "Insel German Coast IPA Beer",
    price: "3.95",
    volume: "330ml",
    type: "IPA"
  },
  {
    name: "Insel Kreide Beer",
    price: "3.95",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Kronenbourg 1664 Beer",
    price: "0.99",
    volume: "250ml",
    type: "Lager"
  },
  {
    name: "L'Echappée Originale Beer",
    price: "3.90",
    volume: "375ml",
    type: "Ale"
  },
  {
    name: "Lägere Bräu Beer",
    price: "1.00",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "La Nébuleuse Double Oat Beer",
    price: "3.40",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "La Nébuleuse Stirling Beer",
    price: "3.40",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Leffe Lager Beer",
    price: "2.40",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Liefmans Fruitesse Beer",
    price: "2.60",
    volume: "250ml",
    type: "Ale"
  },
  {
    name: "Liefmans Yell'Oh Beer",
    price: "2.80",
    volume: "250ml",
    type: "Lager"
  },
  {
    name: "Luzerner Original Beer",
    price: "4.20",
    volume: "330ml",
    type: "Lager"
  },
  {
    name: "Luzerner Red Ale",
    price: "3.00",
    volume: "330ml",
    type: "Ale"
  },
  {
    name: "Molson Canadian Beer",
    price: "2.80",
    volume: "355ml",
    type: "Lager"
  },
];
//define margins, height and width
const margin = { top: 20, right: 0, bottom: 30, left: 40 };
const height = 500;
const width = 954;

//create svg container
const svg = d3
  .select(".canva")
  .append("svg")
  .attr("viewBox", [0, 0, width, height]);
//tooltip
var tooltip = d3
  .select(".canva")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

//data input and selection
d3.select("#shop_option").on("change", change);

function change() {
  let data = coop;
  if (this.selectedIndex == 1) {
    data = manor;
  }
  //removing svg and tooltip
  d3.select(".canva").select("svg").remove();
  d3.select(".canva").select("div").remove();

  //updating all elements
  const svg = d3
    .select(".canva")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  var tooltip = d3
    .select(".canva")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  

  x = d3
    .scaleBand()
    .domain(data.map((d, i) => i))
    .rangeRound([margin.left, width - margin.right - 27])
    .padding(0.1);
  y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.price * 1.1)])
    .range([height - margin.bottom, margin.top]);
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x));

  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));
  //create x and y axis and define y axis title
  yTitle = (g) =>
    g
      .append("text")
      .attr("font-family", "sans-serif")
      .attr("font-size", 11)
      .attr("font-weight", "bold")
      .attr("y", 10)
      .text("Price in CHF");
  xTitle = (g) =>
    g
      .append("text")
      .attr("font-family", "sans-serif")
      .attr("font-size", 11)
      .attr("font-weight", "bold")
      .attr("transform", `translate(${width + margin.right - 28},${height - margin.bottom})`)
      .text("Index");
  yAxis = (g) =>
    g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call((g) => g.select(".domain").remove());
  xAxis = (g) =>
    g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
  // create bars for each beer
  var bars = svg
    .append("g")
    .attr("fill", "lightyellow")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", (d) => y(d.price))
    .attr("height", 0)
    .attr("width", x.bandwidth())
    .on("mouseover", function (d) {
      d3.select(this).style("fill", "yellow");
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip
        .html(`<span class="tooltiptext"> Name: ${d.name} <br/> Price: ${d.price} .-  <br /> Volume: ${d.volume}  <br />  Type: ${d.type} </span>`)
    })
    .on("mouseout", function (d) {
      d3.select(this).style("fill", "lightyellow");
      tooltip.transition().duration(500).style("opacity", 0);
    });
  bars
    .transition()
    .duration(1500)
    .delay(200)
    .attr("height", (d) => y(0) - y(d.price));
  svg
    .append("g")
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text("🍺")
    .attr("x", (d, i) => x(i))
    .attr("y", 0)
    .on("mouseover", function (d) {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip
        .html(`<span class="tooltiptext"> Name: ${d.name} <br/> Price: ${d.price} .-  <br /> Volume: ${d.volume}  <br />  Type: ${d.type} </span>`)
        .style("left", d3.select(this) + "px")
        .style("top", d3.select(this) - 50 + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    })
    .transition()
    .duration(1000)
    .attr("y", (d) => y(d.price) + 14);
  
  // set the dimensions and margins of the graph
var width_pie = 450
    height_pie = 450
    margin_pie = 50

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width_pie, height_pie) / 2 - margin_pie


  //removing svg
  d3.select("#my_dataviz").select("svg.pie").remove();
  d3.select("#my_dataviz").select("div").remove();

// append the svg object to the div called 'my_dataviz'
  var svg_pie = d3.select("#my_dataviz")
      .append("svg")
        .attr("class", "pie")
        .attr("width", width_pie)
        .attr("height", height_pie)
      .append("g")
        .attr("transform", "translate(" + width_pie / 2 + "," + height_pie / 2 + ")");

    // Create data
    let Ale_num = 0;
    let Lager_num = 0;
    let IPA_num = 0;
    for(let i of data){
      console.log(i.type)
      if(i.type == "Lager"){
        ++Lager_num;
      }
      else if(i.type == "Ale"){
        ++Ale_num;
      }
      else ++IPA_num;
    }

    var data1 = {Ale: Ale_num, Lager: Lager_num, IPA:IPA_num}

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(["Ale", "Lager", "IPA"])
      .range(d3.schemeDark2);

    function update(data) {
    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(IPA) {return IPA.value; })
      .sort(function(Ale, Lager) { console.log(Ale) ; return d3.ascending(Ale.key, Lager.key);} ) // This make sure that group order remains the same in the pie chart
    var data_ready = pie(d3.entries(data))

    // shape helper to build arcs:
    var arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    var u = svg_pie.selectAll("path")
        .data(data_ready)
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      u
        .enter()
        .append('path')
        .merge(u)
        .transition()
        .duration(2000)
        .attr('d', arcGenerator)
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 1)

    // Now add the annotation. Use the centroid method to get the best coordinates
      u
        .enter()
        .append('text')
        .text(function(d){ return d.data.value + " " + d.data.key})
        .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
        .attr("font-weight", "bold")
        .style("text-anchor", "middle")
        .style("font-size", 17)

      u
        .exit()
        .remove()

    }

    // Initialize the plot with the first dataset
    update(data1)
  
  d3.select("#output").select("table").remove();
  
  function json2Table(json) {
    let cols = Object.keys(json[0]);


    //Map over columns, make headers,join into string
    let headerRow = cols
      .map(col => `<th>${col}</th>`)
      .join("");

    //map over array of json objs, for each row(obj) map over column values,
    //and return a td with the value of that object for its column
    //take that array of tds and join them
    //then return a row of the tds
    //finally join all the rows together
    let rows = json
      .map(row => {
        let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
        return `<tr>${tds}</tr>`;
      })
      .join("");

    //build the table
    const table = `
    <table>
      <thead>
        <tr>${headerRow}</tr>
      <thead>
      <tbody>
        ${rows}
      <tbody>
    <table>`;

    return table;
  }

  output = document.getElementById('output')
  output.innerHTML = json2Table(data)

  // call x, y axis and y title

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

  svg.call(yTitle);

  svg.call(xTitle);
}
//define x and y scales and position them
x = d3
  .scaleBand()
  .domain(coop.map((d, i) => i))
  .rangeRound([margin.left, width - margin.right - 27])
  .padding(0.1);
y = d3
  .scaleLinear()
  .domain([0, d3.max(coop, (d) => d.price * 1.1)])
  .range([height - margin.bottom, margin.top]);

svg
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x));

svg
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y));
//create x and y axis and define y axis title
yTitle = (g) =>
  g
    .append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 11)
    .attr("font-weight", "bold")
    .attr("y", 10)
    .text("Price in CHF");
xTitle = (g) =>
  g
    .append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 11)
    .attr("font-weight", "bold")
    .attr("transform", `translate(${width + margin.right - 28},${height - margin.bottom})`)
    .text("Index");
yAxis = (g) =>
  g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call((g) => g.select(".domain").remove());
xAxis = (g) =>
  g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .call((g) => g.select(".domain").remove());
    
// create bars for each beer
var bars = svg
  .append("g")
  .attr("fill", "lightyellow")
  .selectAll("rect")
  .data(coop)
  .join("rect")
  .attr("x", (d, i) => x(i))
  .attr("y", (d) => y(d.price))
  .attr("height", 0)
  .attr("width", x.bandwidth())
  //mouseover function to display the data
  .on("mouseover", function (d) {
    d3.select(this).style("fill", "yellow");
    tooltip.transition().duration(200).style("opacity", 0.9);
    tooltip
      .html(`<span class="tooltiptext"> Name: ${d.name} <br/> Price: ${d.price} .-  <br /> Volume: ${d.volume}  <br />  Type: ${d.type} </span>`)
      .style("left", d3.select(this) + "px")
      .style("top", d3.select(this) - 50 + "px");
  })
  .on("mouseout", function (d) {
    d3.select(this).style("fill", "lightyellow");
    tooltip.transition().duration(500).style("opacity", 0);
  });
bars
  .transition()
  .duration(1500)
  .delay(200)
  .attr("height", (d) => y(0) - y(d.price));

//add beer emoji
svg
  .append("g")
  .selectAll("text")
  .data(coop)
  .enter()
  .append("text")
  .text("🍺")
  .attr("x", (d, i) => x(i))
  .attr("y", 0)
  .on("mouseover", function (d) {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip
        .html(`<span class="tooltiptext"> Name: ${d.name} <br/> Price: ${d.price} .-  <br /> Volume: ${d.volume}  <br />  Type: ${d.type} </span>`)
        .style("left", d3.select(this) + "px")
        .style("top", d3.select(this) - 50 + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    })
  .transition()
  .duration(1000)
  .attr("y", (d) => y(d.price) + 14);
  

// set the dimensions and margins of the graph
var width_pie = 450
    height_pie = 450
    margin_pie = 50

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width_pie, height_pie) / 2 - margin_pie

// append the svg object to the div called 'my_dataviz'
  var svg_pie = d3.select("#my_dataviz")
      .append("svg")
        .attr("class", "pie")
        .attr("width", width_pie)
        .attr("height", height_pie)
      .append("g")
        .attr("transform", "translate(" + width_pie / 2 + "," + height_pie / 2 + ")");

    // Create data
    let Ale_num = 0;
    let Lager_num = 0;
    let IPA_num = 0;
    for(let i of coop){
      console.log(i.type)
      if(i.type == "Lager"){
        ++Lager_num;
      }
      else if(i.type == "Ale"){
        ++Ale_num;
      }
      else ++IPA_num;
    }

    var data1 = {Ale: Ale_num, Lager: Lager_num, IPA:IPA_num}

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(["Ale", "Lager", "IPA"])
      .range(d3.schemeDark2);

    function update(data) {
    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(IPA) {return IPA.value; })
      .sort(function(Ale, Lager) { console.log(Ale) ; return d3.ascending(Ale.key, Lager.key);} ) // This make sure that group order remains the same in the pie chart
    var data_ready = pie(d3.entries(data))

    // shape helper to build arcs:
    var arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    var u = svg_pie.selectAll("path")
        .data(data_ready)
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      u
        .enter()
        .append('path')
        .merge(u)
        .transition()
        .duration(2000)
        .attr('d', arcGenerator)
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 1)

    // Now add the annotation. Use the centroid method to get the best coordinates
      u
        .enter()
        .append('text')
        .text(function(d){ return d.data.value + " " + d.data.key})
        .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
        .attr("font-weight", "bold")
        .style("text-anchor", "middle")
        .style("font-size", 17)

      u
        .exit()
        .remove()

    }

    // Initialize the plot with the first dataset
    update(data1)
  
    
function json2Table(json) {
  let cols = Object.keys(json[0]);


  //Map over columns, make headers,join into string
  let headerRow = cols
    .map(col => `<th>${col}</th>`)
    .join("");

  //map over array of json objs, for each row(obj) map over column values,
  //and return a td with the value of that object for its column
  //take that array of tds and join them
  //then return a row of the tds
  //finally join all the rows together
  let rows = json
    .map(row => {
      let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");

  //build the table
  const table = `
	<table>
		<thead>
			<tr>${headerRow}</tr>
		<thead>
		<tbody>
			${rows}
		<tbody>
	<table>`;

  return table;
}

output = document.getElementById('output')
output.innerHTML = json2Table(coop)

// call x, y axis and y title

svg.append("g").call(xAxis);

svg.append("g").call(yAxis);

svg.call(yTitle);

svg.call(xTitle);
