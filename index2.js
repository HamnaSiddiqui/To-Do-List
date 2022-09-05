function getAndUpdate(){
    console.log("Your function is working");
    title = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if(localStorage.getItem("itemsJson") == null){
        itemJsonarr = [];
        itemJsonarr.push([title, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonarr));
    }
    else{
        //fetching
        itemJsonarrStr = localStorage.getItem("itemsJson");
        itemJsonarr = JSON.parse(itemJsonarrStr);
        //again adding and saving in list
        itemJsonarr.push([title,desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonarr));
    }
    update();
}
function update(){
    if(localStorage.getItem("itemsJson") == null){
        itemJsonarr = []; 
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonarr));
    }
    else{
        //fetching
        itemJsonarrStr = localStorage.getItem("itemsJson");
        itemJsonarr = JSON.parse(itemJsonarrStr);
    }
    //populating the table
    tbody = document.getElementById("tablebody");
    let str = "";
    itemJsonarr.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" onclick = "deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tbody.innerHTML = str;
}
let add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemindex){
    console.log("Delete",itemindex);
    itemJsonarrStr = localStorage.getItem("itemsJson");
    itemJsonarr = JSON.parse(itemJsonarrStr);
    //Delete itemindex element from the array
    itemJsonarr.splice(itemindex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonarr));
    update();
}
let clearing = document.getElementById("clear").value;
function clearList(){
    if(confirm("Do you really want to clear the List?")){
    console.log("clearing the whole list");
    localStorage.clear();
    update();
};
    alert("Your to dos list has been cleared!");
}