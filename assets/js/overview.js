'use strict';

$('#loading').style.display = 'block';
timeout(100).then(async function() {
    for (let i = 1;; i++) {
        const { status, response } = await ajax.request({ url: `../assets/images/overview/overview_${i}.jpg`, responseType: 'blob' });
        if (status != 200) { break; }
        const image = (window.URL || window.webkitURL).createObjectURL(response);

        const img = createElement({ tag: 'img' });
        img.src = image;
        img.bindEvent('load', function(e) {
            $('#divide').style.display = 'none';
            $('#loading').style.display = 'none';
            $('#images').appendChild(img);
        });
    }
});