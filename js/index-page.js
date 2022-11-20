
function mountList(commands, functions, input, output, obs){
    let li = `<tr><th align="left";>Command</th>
        <th align="left";>Functions</th>
        <th align="left";>Input</th>
        <th align="left";>Output</th>
        <th align="left";>Extra info</th>
        </tr>`;
    li += `<tr>
            <td>${commands} </td>
            <td>${functions} </td>
            <td>${input} </td>
            <td>${output} </td>
            <td>${obs} </td>
        </tr>`;
    document.getElementById("messages").innerHTML = li;

}

function introduction(){
    document.getElementById("title").innerHTML = "Introduction"; 
    document.getElementById("text1").innerHTML = "<br>This webpage contains some infomrations about <b>Trebas Institute's projects.</b> <br><br>"
    +"The projects were created by students and bring some important features for who has interesting in technology <br><br>"
    +"- <a href='https://www.trebas.com/'>Trebas Institute website</a><br><br>"

    let li = `<tr>
        <th align="left";>Trebas Institute</th>
        <th></th>
        </tr>`;
    li += `<tr>
            <td><img src='https://www.trebas.com/assets/svg/header-logo.svg' alt='Code' style='width:100%' class='center'></td>
        </tr>`;
    li += `<tr>
            <td>Trebas-logo</td>
        </tr>`;
    document.getElementById("messages").innerHTML = li;
}
function projects(){
    document.getElementById("title").innerHTML = "Projects"; 
    document.getElementById("text1").innerHTML = 
    "Sorry, we are still building this page.<br><br>"
    +"Have a look at the top navegation bar for more subjects.<br><br>"
    mountList(  
        "List of projects",
        "Building",
        "Trebas Institute",
        "<img src='https://www.trebas.com/assets/svg/header-logo.svg' alt='trebas'>",
        "<a href='https://www.trebas.com/'>Trebas Institute website</a>",
    );
}
function developedby(){
    document.getElementById("title").innerHTML = "Developed By"; 
    document.getElementById("text1").innerHTML = 
    "Thiago Trolle Cavalheiro<br><br>"
    +"Student of Cyber Security / CSA-03 <br><br>"
    mountList(  
        "Thiago",
        "Trolle",
        "Cavalheiro",
        "<img src='https://www.trebas.com/assets/svg/header-logo.svg' alt='trebas'>",
        "Trebas Institute",
    );
}