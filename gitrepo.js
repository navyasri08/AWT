function display()
{
    const username=document.getElementById("uname").value;

    const url=`https://api.github.com/users/`+username+`/repos`;
    fetch(url)
    .then((response)=>
    {
        return response.json()
    })
    .then((data)=>{
               table=document.createElement("TABLE");
               table.border="1"
    row=table.insertRow(-1)
    cellH1=row.insertCell(-1)
    cellH2=row.insertCell(-1)
    cellH1.innerHTML="NAME"
    cellH2.innerHTML="USER"
      data.forEach((element)=>{
      row1=table.insertRow(-1);
      cell1=row1.insertCell(-1)
      cell2=row1.insertCell(-1)
     // cell3=row1.insertCell(-1)
     cell1.innerHTML=element.name
      cell2.innerHTML=element.owner.login
    })
    var divtab=document.getElementById("div");
    divtab.append(table);
    console.log(data);
})
.catch(function(err) {
  console.log(err);
});
}
