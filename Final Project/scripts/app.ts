/**
* http://stackoverflow.com/a/18278346
*/
function loadJSON(path: string, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) {
                    success(JSON.parse(xhr.responseText));
                }
            } else {
                if (error) {
                    error(xhr);
                }
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
document.addEventListener("DOMContentLoaded", (ev: PointerEvent) => {
    var painters = new Painters();
    var selection = [];
    loadJSON("JSON/famousPainters.json", (data) => {
        var data = data.famousPainters;
        data.forEach((elem) => {
            var painter = new Painter({
                birthdate: elem.birthdate,
                name: elem.name,
                birthplace: elem.birthplace,
                style: elem.style,
                nationality: elem.nationality
            });
            elem.examples.forEach((painting) => {
                painter.addExample(new Painting({
                    title: painting.title,
                    link: painting.link,
                    year: painting.year,
                    image: painting.image
                }));
            });
            selection.push(painter.name);
            painters.addPainter(painter);
        });

        var painterSelect = <HTMLSelectElement> document.getElementById('painterSelect');
        selection.forEach((name) => {
            var opt = document.createElement('option');
            opt.setAttribute('title', name);
            opt.innerHTML = name;
            painterSelect.appendChild(opt);
        });
        var painterInfo = <HTMLElement> document.getElementById('painter');
        painterSelect.addEventListener("change",(ev) => {
            painterInfo.innerHTML = "";

            var painter: Painter = painters.getPainterByName(painterSelect.value);

            var h2 = document.createElement('h2');
            h2.textContent = painter.name;
            painterInfo.appendChild(h2);

            var h3 = document.createElement('h3');
            h3.textContent = "Basic Information";
            painterInfo.appendChild(h3);

            var li = document.createElement('li');
            li.textContent = "Style: " + painter.style;
            painterInfo.appendChild(li);

            var li = document.createElement('li');
            li.textContent = "Birth: " + painter.birthdate + " at " + painter.birthplace;
            painterInfo.appendChild(li);

            var li = document.createElement('li');
            li.textContent = "Nationality: " + painter.nationality;
            painterInfo.appendChild(li);

            var h3 = document.createElement('h2');
            h3.textContent = "Examples";
            painterInfo.appendChild(h3);

            var painterExample = document.createElement('div');
            painterExample.className = "examples";
            painterInfo.appendChild(painterExample);

            painter.examples.forEach((painting) => {
                var paintingInfo = document.createElement('div');
                paintingInfo.className = "painting";
                paintingInfo.style.backgroundImage = "url(" + painting.image + ")";

                var paintingTitle = document.createElement('div');
                paintingTitle.className = "title";

                var paintingLink = document.createElement('a');
                paintingLink.href = painting.link;
                paintingLink.textContent = painting.title;
                paintingTitle.appendChild(paintingLink);
                paintingInfo.appendChild(paintingTitle);

                var paintingYear = document.createElement('div');
                paintingYear.className = "year";
                paintingYear.textContent = painting.year;
                paintingInfo.appendChild(paintingYear);

                painterExample.appendChild(paintingInfo);
            });

        }, false);

    }, (xhr) => {
        console.error(xhr);
    });
}, false);