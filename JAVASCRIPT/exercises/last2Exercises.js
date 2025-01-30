//5th exercise web page builder

function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let viewStr;

    if (views < 1000000){
         viewStr = views/1000 + "K";
    }

    else if (views > 1000000) {
         viewStr = views / 100000 + "M";
    }

    else{
        viewStr = views / 1000 + "K";
    }

    let html = ` <div class="card">
            <div class="image"><img src="${thumbnail}"  alt=""></div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName}  . ${viewStr} Views   .   ${monthsOld} Months Ago</p>
            </div>
        </div>`
}

createCard("introduction to backend | Sigma Web Dev", "code with bhinder", 2560000, 12, "31:22", "https://i.ytimg.com/vi/9H-Ieq6zjIY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA-WIZAGIFuvinqPyBDZmo5hnDTTw")

