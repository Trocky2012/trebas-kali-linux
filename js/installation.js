function clearList(){
    let li = `<tr><th align="left";></th> </tr>`;
    li += `<tr> <td></td> </tr>`;
    document.getElementById("messages").innerHTML = li;
}

function addHeaderList(ah1, ah2, ah3, ah4, ah5){
    let li = `<tr>
        <th align="left";>${ah1}</th>
        <th align="left";>${ah2} </th>
        <th align="left";>${ah3}</th>
        <th align="left";>${ah4}</th>
        <th align="left";>${ah5}</th>
        </tr>`;
    document.getElementById("messages").innerHTML += li;
}

function addInList(degree, school, course, start, end){
    let li = `<tr>
            <td>${degree} </td>
            <td>${school} </td>
            <td>${course} </td>
            <td>${start} </td>
            <td>${end} </td>
        </tr>`;
    document.getElementById("messages").innerHTML += li;
}


function home(){
    document.getElementById("title").innerHTML = "General information about Kali Linux installation"; 
    document.getElementById("text1").innerHTML = "&nbsp This is the tutorial for <b>Kali Linux Installation.</b> <br><br>"
    +"&nbsp First, download the VMware, a software which runs virtual machines. Click at the link below and select the download option that suits for you. <br><br>"
    +"- <a href='https://www.vmware.com/ca/products/workstation-player/workstation-player-evaluation.html'>VMware download link</a><br><br>"
    +"&nbsp Once the VMware is installed, open this link and download the Kali Linux. This may take several minutes to be done. <br><br>"
    +"- <a href='https://www.kali.org/'>Kali Linux download link</a><br><br>"
    +"&nbsp Navegate trougth the left menu to see more details of these softwares and their installations. <br><br>";

    clearList()
    addHeaderList("Using cmd in Kali Linux:","","","","")
    addInList("<img src='https://static.javatpoint.com/tutorial/kali-linux/images/kali-linux-commands2.png' alt='Code' style='width:50%'>","","","","");
 
}

function vmware(){
    document.getElementById("title").innerHTML = "VMware installation"; 
    document.getElementById("text1").innerHTML = 
    "&nbsp &nbsp VMware is a virtualization and cloud computing software provider based in Palo Alto, Calif, it is a "
    +"subsidiary of Dell Technologies and it`s on the market since 1998. With VMware server virtualization, a "
    +"hypervisor is installed on the physical server to allow for multiple virtual machines (VMs) to run on "
    +"the same physical server. Each VM can run its own operating system (OS), which means multiple OSes can "
    +"run on one physical server. All the VMs on the same physical server share resources, such as networking "
    +"and RAM. <br><br>"
    +"&nbsp &nbsp VMware has developed support to its hypervisor to run containerized workloads in a Kubernetes cluster " 
    +"in a similar way. These types of workloads can be managed by the infrastructure team in the same way as "
    +"virtual machines and the DevOps teams can deploy containers as they were used to. <br><br>"
    +"- <b><a href='https://www.vmware.com/ca/products/workstation-player/workstation-player-evaluation.html'>VMware download link</a></b><br><br>"
    +"<img src='img/a-kali-linux/vmware.jpg' style='width:60%' alt='vmware'>"
    clearList();
    
}
function kali_linux(){
    document.getElementById("title").innerHTML = "Kali Linux installation"; 
    document.getElementById("text1").innerHTML = 
    "&nbsp &nbsp Kali Linux (formerly known as BackTrack Linux) is an open-source, Debian-based Linux " 
    +"distribution aimed at advanced Penetration Testing and Security Auditing. It does it by providing " 
    +"common tools, configurations, and automations which allows the user to focus on the task that " 
    +"needs to be completed, not the surrounding activity. <br><br> &nbsp &nbsp Kali Linux contains industry specific "
    +"modifications as well as several hundred tools targeted towards various Information security "
    +"tasks, such as Penetration Testing, Security Research, Computer Forensics, Reverse Engineering, "
    +"Vulnerability Management and Red Team Testing. Kali Linux is a multi-platform solution, "
    +"accessible and freely available to information security professionals and hobbyists.<br><br>"

    +"- <b><a href='https://www.kali.org/'>Kali Linux download link</a></b><br><br>"
    +"<img src='img/a-kali-linux/kaliinstall.jpg' style='width:40%' alt='kali_install.jpg'><br><br>"
    
    +"- Check below the recommended options for its download, <b>Installer Images</b> and <b>Virtual machines</b>, and to complete it, just follow the website instructions. (<a href='https://www.kali.org/'>Kali Linux download link</a>)<br><br>"
    +"<img src='img/a-kali-linux/kalioptions.jpg' style='width:50%' alt='kali_install.jpg'><br><br>"
    clearList();
}
function installation_video(){
    document.getElementById("title").innerHTML = "Kali Linux / VMware installation video"; 
    document.getElementById("text1").innerHTML = 
    "<iframe width='730' height='415' src='https://www.youtube.com/embed/P3T1uEh77r0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    clearList();
}