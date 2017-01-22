(function() {
    var urls = [
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author',
        'http://eloquentjavascript.net/author'
    ];

    var settings = {
        sync: false
    };

    process(0);

    function process(count) {
        if (count >= urls.length) {
            return;
        }

        var currentUrl = urls[count];

        getUrl(currentUrl).then(function(response) {
            console.log('[' + count + '] ' + 'url: ' + currentUrl + ' , response: ' + response);
            process(++count);
        }, function(err) {
            console.log('[' + count + '] ' + 'url: ' + currentUrl + ' , err: ' + err);
            process(++count);
        });
    }

    function getUrl(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.open('GET', url, settings.sync);

            xhr.onload = function onload() {
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    var message = url + ' : ' + this.code + ' : ' + this.statusText;
                    reject(message);
                }
            };
            xhr.onreject = function onreject() {
                var message = 'Network error';
                reject(message);
            };

            xhr.send();
        });
    }
})();