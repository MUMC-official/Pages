const video=document.getElementById('titleVideo')
    window.addEventListener('load', function () {
        const video = document.getElementById('titleVideo');
        const setTime = () => {
            video.currentTime = 0.0;
            video.play();
        }


        const playVideoWithDelay = () => {
            const delay = 1000;

            setTimeout(() => {
                setTime();
            }, delay);
        };

        playVideoWithDelay();
    
        video.addEventListener('mouseover',setTime)
        video.addEventListener('click',setTime)


        const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        if (isIOS) {
                // If iOS, hide video and show image
                document.getElementById('titleVideo').style.display = 'none';
                document.getElementById('titleImage').style.display = 'block';
            } else {
                // If not iOS, hide image and show video
                document.getElementById('titleVideo').style.display = 'block';
                document.getElementById('titleImage').style.display = 'none';
            }
    });


    function img_() {
        return Array.from(document.getElementsByTagName("img")).map(i => i.src);
    }