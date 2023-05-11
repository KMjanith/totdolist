const activityList = [];
 function activity(){
    //let activity = document.querySelector(".input-text");
    //activityList.push(activity.value);
     let name = document.querySelector('.input-text').value;
     let date = document.querySelector('.input-date').value;
    // console.log(name, date)
     console.log(activityList);
     activityList.push({ name, date });
     
     display(activityList);
     name.innerHTML = '';
     
}

function enterKey(keytag) {
    if (keytag === 'Enter') {
        activity();
    }
}

let HTMLtags = '';
function display(array) {
    for (let i = 0; i < array.length ; i++) {
        let temp = array[i];
        let newHTML = `
        <div class="inline-elements">${temp.name}</div> 
        <div class="inline-elements">${temp.date}</div>
        <div class="inline-elements"><button class="delete" onclick="activityList.splice(${i},1);display(activityList);">Delete</button></div>`;
        HTMLtags = HTMLtags + newHTML;
        //console.log(HTMLtags);
    }
    document.querySelector(".todo-elements").innerHTML = HTMLtags;
    HTMLtags = '';
}
