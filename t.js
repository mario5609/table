var dt=[];

function ad(){
    
    const vl = {};
    vl.v1 = document.getElementById("no").value;
    vl.v2 = document.getElementById("na").value;
    vl.v3 = document.getElementById("cl").value;
    vl.v4 = document.getElementById("rg").value;
    
    if(vl.v1=="" || vl.v2=="" || vl.v3=="" || vl.v4==""){
        alert(" please fill in the details");
    }

    else{

    
        dt.push(vl);
    
        console.log(dt);
    
        var table = document.getElementById("tbl");
        var row = table.insertRow(-1); 
    
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
    
        c1.innerHTML = (vl.v1);
        c2.innerHTML = (vl.v2);
        c3.innerHTML = (vl.v3);
        c4.innerHTML = (vl.v4);
    
        return dt;
    };

}

function re(){
    document.getElementById("tbl").deleteRow(1);
    const del = dt.splice(-1);
    console.log(dt);
    return dt;
}