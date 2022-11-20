
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
    document.getElementById("title").innerHTML = "General information about Kali Linux installation"; 
    document.getElementById("text1").innerHTML = "<br>This is the tutorial for <b>Kali Linux Installation.</b> <br><br>"
    +"First, download the VMware, a software which runs virtual machines. Click at the link below and select the download option that suits for you. <br><br>"
    +"- <a href='https://www.vmware.com/ca/products/workstation-player/workstation-player-evaluation.html'>VMware download link</a><br><br>"
    +"Once the VMware is installed, open this link and download the Kali Linux. This may take several minutes to be done. <br><br>"
    +"- <a href='https://www.kali.org/'>Kali Linux download link</a><br><br>"
    +"Navegate trougth the left menu to see more details of these installations. <br><br>";

    let li = `<tr>
        <th align="left";>Using cmd in Kali Linux:</th>
        <th></th>
        </tr>`;
    li += `<tr>
            <td><img src='https://static.javatpoint.com/tutorial/kali-linux/images/kali-linux-commands2.png' alt='Code' style='width:70%' class='center'></td>
        </tr>`;
    li += `<tr>
            <td>Example of coding</td>
        </tr>`;
    document.getElementById("messages").innerHTML = li;
}

function vmware(){
    document.getElementById("title").innerHTML = "VMware installation"; 
    document.getElementById("text1").innerHTML = 
    "The <b>pwd</b> command means print working directory.<br><br>"
    +"It is one of the most basic and frequently used commands in Linux.<br><br>"
    +"When invoked the command prints the complete path of the current working.<br><br>"; 
    mountList(  
        "pwd",
        "Print working directory",
        "pwd",
        "<img src='img/a-kali-linux/pwd.jpg' alt='pwd'>",
        "",
    );
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