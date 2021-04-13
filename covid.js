function display()
{
const country=document.getElementById("name").value;
const url='https://api.covid19api.com/live/country/'+country;
fetch(url)
.then((response)=>{
    return response.json()
})
.then(data=>{
    
    table=document.createElement("TABLE");
    table.border="1";
    
    row=table.insertRow(-1)
    cellH1=row.insertCell(-1)
    cellH2=row.insertCell(-1)
    cellH3=row.insertCell(-1)
    cellH4=row.insertCell(-1)
    cellH5=row.insertCell(-1)
    cellH1.innerHTML="DATE"
    cellH2.innerHTML="STATE"
    cellH3.innerHTML="ACTIVE CASES"
    cellH4.innerHTML="DEATHS TILL NOW"
    cellH5.innerHTML="RECOVERED CASES"
      data.forEach((element)=>{
      row1=table.insertRow(-1);
      cell1=row1.insertCell(-1)
      cell2=row1.insertCell(-1)
      cell3=row1.insertCell(-1)
      cell4=row1.insertCell(-1)
      cell5=row1.insertCell(-1)
      cell1.innerHTML=element.Date
      cell2.innerHTML=element.Province
      cell3.innerHTML=element.Active
      cell4.innerHTML=element.Deaths
      cell5.innerHTML=element.Recovered
      
      })
    var divtab=document.getElementById("div");
    divtab.append(table);
    console.log(data)
})
.catch(function(err) {
    console.log(err);
  });
}