
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

function home(){
    document.getElementById("title").innerHTML = "Introduction to new Trebas Institute technologies"; 
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
function kali_linux(){
    document.getElementById("title").innerHTML = "Kali Linux installation"; 
    document.getElementById("text1").innerHTML = 
    "By default, when you log into your Linux system, your current working directory is set to your home directory.<br><br>"
    +"To change the working directory use the <b>cd</b> command.<br><br>"
    +"Type the folder the you want to open after cd.<br><br>";
    mountList(  
        "cd -option",
        "Change working directory",
        "cd Documents",
        "<img src='img/a-kali-linux/cd.jpg' alt='cd'>",
        "",
    );
}