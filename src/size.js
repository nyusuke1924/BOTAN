var WindowSize = "60vw";
document.documentElement.style.setProperty('--Window-Size', WindowSize);

var HeaderSize = "55px";
document.documentElement.style.setProperty('--Header-Size', HeaderSize);

window_load();
window.onresize = window_load;

function window_load() {
	const sW = window.innerWidth;

    document.documentElement.style.setProperty('--Home-sW', sW);

    if(768 <= sW){
        const FrontImageSize = "65vh";
        
        document.documentElement.style.setProperty('--FrontImage-Size', FrontImageSize);
    }

    else{
        const FrontImageSize = "75vh";
        
        document.documentElement.style.setProperty('--FrontImage-Size', FrontImageSize);
    }
}

var GridMargin = '20px';
document.documentElement.style.setProperty('--GridMargin-Size', GridMargin);