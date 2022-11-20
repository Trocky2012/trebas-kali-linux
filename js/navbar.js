var path = window.location.pathname.split('/').pop();

if(path == "home.html"){

    document.write(`
    
        <div class="topnav">
            <a class="active" href="home.html">Home</a>
            <a href="a-kali-linux.html">Kali linux</a>
            <a href="a-kali-linux-installation.html">Kali linux Installation</a>
            <a href="#test">Test</a>
        </div>
    
    `);

}

if(path == "a-kali-linux.html"){

    document.write(`
    
    <div class="topnav">
        <a href="home.html">Home</a>
        <a class="active" href="a-kali-linux.html">Kali linux</a>
        <a href="a-kali-linux-installation.html">Kali linux Installation</a>
        <a href="#test">Test</a>
    </div>
    
    `);

}

if(path == "a-kali-linux-installation.html"){

    document.write(`
    
    <div class="topnav">
        <a href="home.html">Home</a>
        <a href="a-kali-linux.html">Kali linux</a>
        <a class="active" href="a-kali-linux-installation.html">Kali linux Installation</a>
        <a href="#test">Test</a>
    </div>
    
    `);

}