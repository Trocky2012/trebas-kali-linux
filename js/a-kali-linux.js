
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
    document.getElementById("title").innerHTML = "Home - Kali Linux"; 
    document.getElementById("text1").innerHTML = "<br> &nbsp &nbsp  <b>Kali Linux</b> (formerly known as BackTrack Linux) is an open-source, Debian-based Linux "
    +"distribution aimed at advanced Penetration Testing and Security Auditing. It works by providing "
    +"common tools, configurations, and automations which allows the user to focus on the task that "
    +"needs to be completed, not the surrounding activity. <br><br> &nbsp &nbsp Kali Linux contains industry specific "
    +"modifications as well as several hundred tools targeted towards various Information security "
    +"tasks, such as <b>Penetration Testing</b>, Security Research, Computer Forensics, Reverse Engineering, "
    +"Vulnerability Management and Red Team Testing. Kali Linux is a multi-platform solution, "
    +"accessible and freely available to information security professionals and hobbyists."; 

    let li = `<tr>
        <th align="left";>Images:</th>
        <th></th>
        </tr>`;
    li += `<tr>
            <td><img src='https://static.javatpoint.com/tutorial/kali-linux/images/kali-linux-commands2.png' alt='Code' style='width:70%' class='center'></td>
            <td><img src='https://i.redd.it/vkxuqbatopk21.png' alt='chmode' style='width:100%' class='center'></td>
        </tr>`;
    li += `<tr>
            <td>Example of coding</td>
            <td align="right";>command -chmode</td>
        </tr>`;
    document.getElementById("messages").innerHTML = li;
}

function pwd(){
    document.getElementById("title").innerHTML = "pwd"; 
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
function cd(){
    document.getElementById("title").innerHTML = "cd"; 
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
function ls(){
    document.getElementById("title").innerHTML = "ls"; 
    document.getElementById("text1").innerHTML = 
    "The <b>ls</b> command allows you to list all files or directories in the current directory.<br><br>"
    +"The ls command also accepts some flags (also known as options) which are additional information that changes how files or directories are listed in your terminal.<br><br>"
    +"For example, type the ls -R command to list all files and directories with their corresponding subdirectories down to the last file.<br><br>"

    mountList(  
        "ls",
        "List all files or directories in the current directory",
        "ls",
        "<img src='img/a-kali-linux/ls.jpg' alt='ls'>",
        "Try out (ls -la) and (ls -R)",
    );
}
function mkdir(){
    document.getElementById("title").innerHTML = "mkdir"; 
    document.getElementById("text1").innerHTML = 
    "The <b>mkdir</b> command in Linux/Unix allows users to create or make new directories.<br><br>" 
    +"mkdir stands for 'make directory'.<br><br>"
    +"With mkdir , you can also set permissions, create multiple directories (folders) at once, and much more.<br><br>"

    mountList(  
        "mkdir",
        "Create new directories",
        "mkdir -dir_name-",
        "<img src='img/a-kali-linux/mkdir.jpg' alt='mkdir'>",
        "",
    );
}
function rmdir(){
    document.getElementById("title").innerHTML = "rmdir"; 
    document.getElementById("text1").innerHTML = 
    "The <b>rmdir</b> command removes the directory, specified by the Directory parameter, from the system.<br><br>" 
    +"The directory must be empty before you can remove it, and you must have write permission in its parent directory.<br><br>"

    mountList(  
        "rmdir",
        "Remove a directory",
        "rmdir -dir_name-",
        "<img src='img/a-kali-linux/rmdir.jpg' alt='rmdir'>",
        "",
    );
}
function cp(){
    document.getElementById("title").innerHTML = "cp"; 
    document.getElementById("text1").innerHTML = 
    "Use the <b>cp</b> command for copying files from one location to another.<br><br>" 
    +"This command can also copy directories (folders).<br><br>"

    mountList(  
        "cp",
        "Copy files and directories from one location to another",
        "cp -file_name- -dir_name-",
        "<img src='img/a-kali-linux/cp.jpg' alt='cp'>",
        "",
    );
}
function rm(){
    document.getElementById("title").innerHTML = "rm"; 
    document.getElementById("text1").innerHTML = 
    "<b>rm</b> is used to remove objects such as computer files, directories and symbolic links from file systems.<br><br>"
    +"It also removes special files such as device nodes, pipes and socket.<br><br>"

    mountList(  
        "rm",
        "Remove files and directories from one location to another",
        "rm -file_name- / rm -dir_name-",
        "<img src='img/a-kali-linux/rm.jpg' alt='rm'>",
        "",
    );
}
function mv(){
    document.getElementById("title").innerHTML = "mv"; 
    document.getElementById("text1").innerHTML = 
    "<b>mv</b> is a command that moves one or more files or directories from one place to another.<br><br>" 
    +"If both filenames are on the same filesystem, this results in a simple file rename.<br><br>"
    +"Otherwise the file content is copied to the new location and the old file is removed.<br><br>"
    
    mountList(  
        "mv",
        "Moves one or more files or directories from one place to another",
        "mv -file_name- / mv -dir_name-",
        "<img src='img/a-kali-linux/mv.jpg' alt='mv'>",
        "",
    );
}
function locate(){
    document.getElementById("title").innerHTML = "locate (or plocate)"; 
    document.getElementById("text1").innerHTML = 
    "The <b>locate</b> (or <b>plocate</b>) command finds files in Linux using the file name.<br><br>"
    +"locate is used for obtaining instantaneous results, and it is an essential utility when speed is a priority.<br><br>"
    mountList(  
        "locate",
        "Find files",
        "locate -file_name-",
        "<img src='img/a-kali-linux/locate.jpg' alt='locate'>",
        "Before trying it, may use -updatedb-",
    );
}
function updatedb(){
    document.getElementById("title").innerHTML = "updatedb"; 
    document.getElementById("text1").innerHTML = 
    "<b>updatedb</b> creates or updates a database used by locate.<br><br>"
    +"If the database already exists, its data is reused to avoid rereading directories that have not changed.<br><br>"
    +"updatedb is usually run daily by cron(8) to update the default database.<br><br>"
    mountList(  
        "updatedb",
        "creates or updates a database",
        "updatedb",
        "<img src='img/a-kali-linux/updatedb.jpg' alt='updatedb'>",
        "",
    );
}
function passwd(){
    document.getElementById("title").innerHTML = "passwd"; 
    document.getElementById("text1").innerHTML = 
    "The <b>passwd</b> command changes passwords for user accounts." 
    +"A normal user may only change the password for their own account, while the superuser may change the password for any account."
    +"passwd also changes the account or associated password validity period."
    mountList(  
        "passwd",
        "Changes password for an user account",
        "passwd",
        "<img src='img/a-kali-linux/passwd.jpg' alt='passwd'>",
        "",
    );
}
function man(){
    document.getElementById("title").innerHTML = "man"; 
    document.getElementById("text1").innerHTML = 
    "The <b>man</b> command is a built-in manual for using Linux commands.<br><br>"
    +"It allows users to view the reference manuals of a command or utility run in the terminal.<br><br>" 
    +"The man page (short for manual page) includes a command description, applicable options, flags, examples, and other informative sections.<br><br>"; 
    mountList(  
        "man",
        "Shows a command manual",
        "man ls",
        "<img src='img/a-kali-linux/man.jpg' alt='man'>",
        "",
    );
}
function chmod(){
    document.getElementById("title").innerHTML = "chmod"; 
    document.getElementById("text1").innerHTML = 
    "<b>chmod</b> is the command and system call used to change the access permissions and the special mode flags of file system objects.<br><br>"
    +"The name chmod was chosen as an abbreviation of change mode.<br><br>"
    mountList(  
        "chmod",
        "Change the access permissions",
        "chmod 777 -file_name-",
        "rwxrwxrwx -file_name",
        "<img src='https://i.redd.it/vkxuqbatopk21.png' alt='Kali' style='width:100%' class='center'>",
    );
}
function adduser(){
    document.getElementById("title").innerHTML = "adduser"; 
    document.getElementById("text1").innerHTML = 
    "Command used to add a new user to the system.<br><br>"
    +"Usually, it must be executed while logged in as root.<br><br>"
    +"Just type > <b>adduser</b> -user_name-. <br><br>"
    mountList(  
        "adduser",
        "Add a new user",
        "adduser",
        "",
        "This command will ask for the new user info",
    );
}
function etc_passwd(){
    document.getElementById("title").innerHTML = "/etc/passwd"; 
    document.getElementById("text1").innerHTML = 
    "The <b>/etc/passwd</b> is a plain text file.<br><br>"
    +"It contains a list of the system's accounts, giving for each account some useful information like user ID, group ID, home directory, shell, and more.<br><br>" 
    +"The /etc/passwd file should have general read permission as many command utilities use it to map user IDs to user names.<br><br>"
    mountList(  
        "/etc/passwd",
        "List the system's accounts",
        "/etc/passwd",
        "",
        "May this folder is locked. In that case, use the command -<b>chmod</b> 777 /etc/passwd- in root mode",
    );
}
function etc_shadow(){
    document.getElementById("title").innerHTML = "/etc/shadow"; 
    document.getElementById("text1").innerHTML = 
    "The <b>/etc/shadow</b> is a text-based password file.<br><br>"
    +"The shadow file stores the hashed passphrase (or 'hash') format for Linux user account with additional properties related to the user password.<br><br>" 
    +"This shadow file is directly accessible only to the root user. However, some commands or programs (e.g., su, passwd, and others) with unique SetUID (SUID) are set on them to grant them access to the shadow file.<br><br>"
    +"Understanding /etc/shadow file format is essential for sysadmins and developers to debug user account issues.<br><br>"
    mountList(  
        "/etc/shadow",
        "Stores the hash passphrase of users account",
        "/etc/shadow",
        "",
        "Accessible only trought the root user",
    );
}
function su(){
    document.getElementById("title").innerHTML = "su"; 
    document.getElementById("text1").innerHTML = 
    "This command means <b>switch user</b> or substitute user.<br><br>" 
    +"You are basically switching to a particular user and you need its particular password.<br><br>"
    mountList(  
        "su",
        "Switch or substitute user",
        "su",
        "",
        "",
    );
}
function sudo(){
    document.getElementById("title").innerHTML = "sudo"; 
    document.getElementById("text1").innerHTML = 
    "The <b>sudo</b> command runs any command with elevated privileges.<br><br>"
    +"Elevated privileges are required to perform certain administrative tasks.<br><br>"
    mountList(  
        "sudo -command-",
        "Runs any command with elevated privileges",
        "sudo su",
        "",
        "",
    );
}
function ifconfig(){
    document.getElementById("title").innerHTML = "ifconfig"; 
    document.getElementById("text1").innerHTML = 
    "<b>ifconfig</b> is used to configure the kernel-resident network interfaces.<br><br>" 
    +"It is used at boot time to set up interfaces as necessary. After that, it is usually only needed when debugging or when system tuning is needed.<br><br>"
    +"If no arguments are given, ifconfig displays the status of the currently active interfaces.<br><br>"

    mountList(  
        "ifconfig",
        "Configure network interfaces",
        "ifconfig",
        "",
        "",
    );
}
function iwconfig(){
    document.getElementById("title").innerHTML = "iwconfig"; 
    document.getElementById("text1").innerHTML = 
    "<b>iwconfig</b> command in Linux is like ifconfig command, in the sense it works with kernel-resident network interface but it is dedicated to wireless networking interfaces only.<br><br>"
    +"It is used to set the parameters of the network interface that are particular to the wireless operation like SSID, frequency etc.<br><br>"

    mountList(  
        "iwconfig",
        "Configure wireless network interfaces",
        "iwconfig",
        "",
        "",
    );
}
function ping(){
    document.getElementById("title").innerHTML = "ping"; 
    document.getElementById("text1").innerHTML = 
    "The <b>ping</b> command sends packets of data to a specific IP address on a network, and then lets you know how long it took to transmit that data and get a response.<br><br>"
    +"It’s a important tool that you can use to quickly test various points of your network.<br><br>"

    mountList(  
        "ping",
        "Test a specific IP address on a network",
        "ping -ip_address-",
        "",
        "",
    );
}
function arp(){
    document.getElementById("title").innerHTML = "arp"; 
    document.getElementById("text1").innerHTML = 
    "It means Address Resolution Protocol. The <b>arp</b> command displays and modifies the Internet-to-adapter address translation tables used by the Address in Networks and communication management.<br><br>"
    +"The arp command displays the current ARP entry for the host specified by the HostName variable.<br><br>"

    mountList(  
        "arp",
        "Displays and modifies internet address protocol",
        "arp",
        "",
        "",
    );
}
function netstat(){
    document.getElementById("title").innerHTML = "netstat"; 
    document.getElementById("text1").innerHTML = 
    "The <b>netstat</b> command displays the contents of various network-related data structures for active connections.<br><br>"
    +"This netstat function shows the state of all configured interfaces.<br><br>" 
    +"This function of the netstat command clears all the statistic counters for the netstat -i command to zero.<br><br>"

    mountList(  
        "netstat",
        "Show the state of all internet configured interfaces",
        "netstat",
        "",
        "",
    );
}
function route(){
    document.getElementById("title").innerHTML = "route"; 
    document.getElementById("text1").innerHTML = 
    "The <b>route</b> command allows you to make manual entries into the network routing tables.<br><br>" 
    +"The route command distinguishes between routes to hosts and routes to networks by interpreting the network address of the Destination variable, which can be specified either by symbolic name or numeric address.<br><br>"

    mountList(  
        "route",
        "Manual entries into the network routing tables",
        "route",
        "",
        "",
    );
}