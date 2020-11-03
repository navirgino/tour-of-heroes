"use strict";

$(document).ready(function () {
//picture of the day here
    return fetch("https://api.nasa.gov/planetary/apod" + "?" + libraryKey)
        .then(function (res) {
            return res.json();
            //get all the data from the req

        }).then(function (data) {
            console.log(data);
            $('.imgDiv').append(`<img class="card-img-top" src="${data.hdurl}" alt="" />`);
            $('imgDate').append(data.date);
            $('.card-title').append(data.title + " by: " + data.copyright);
            $('.description').append(data.explanation);
            return data;
        });


});


