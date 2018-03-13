const mainModule = (function (dataModule, UIModule) {
  function init() {
    const requestUrl = new Request(`http://api.tvmaze.com/shows`, {
      method: 'GET',
    });

    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (msg) {

        let tvShow = new dataModule.TvShows();
        for (let i = 0; i < 50; i++) {
          var show = new dataModule.Show(
            msg[i].id,
            msg[i].name,
            msg[i].image.medium,
            msg[i].summary
          );
          tvShow.addShow(show);
        }
        UIModule.displayShows(tvShow.shows);
        $("input").val("");
      });


    $("input").keyup(function (event) {
      var value = this.value;

      const requestUrl = new Request(`http://api.tvmaze.com/search/shows?q=${value}`, {
        method: 'GET',
      });
      

      fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })

      .then(function (msg) {
        for (let i = 0; i < 10; i++) {
          let movieName = msg[i].show.name;
          let id = msg[i].show.id;
          UIModule.makeSearchList(movieName, id);
        };
      });

      $("input").change(function (event) {

        var value = $(this).val();
        var element = $(`*[value='${value}']`);
        var id = element.attr("data-id");
        window.location.href = `showInfoPage.html#${id}`;
        console.log(window.location.href);
      
      });
    });
  }



  function infoPage() {
    var id = window.location.hash.slice(1);
    const requestUrl = new Request(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`, {
      method: 'GET',

    });
  

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })

      .then(function (msg) {
        let show = new dataModule.Show(
          msg.id,
          msg.name,
          msg.image.original,
          msg.summary
        );

        for (let i = 0; i < msg._embedded.seasons.length; i++) {
          let seasonInfo = new dataModule.Season(
            msg._embedded.seasons[i].premiereDate,
            msg._embedded.seasons[i].endDate
          );
          show.addSeason(seasonInfo);
        }

        for (let i = 0; i < msg._embedded.cast.length; i++) {
          let castInfo = new dataModule.Cast(msg._embedded.cast[i].person.name);
          show.addCast(castInfo);
        }
        UIModule.displayShow(show);
      });

  }

  function changePage() {
    $("input").keyup(function (event) {
      var value = this.value;
      const requestUrl = new Request(`http://api.tvmaze.com/search/shows?q=${value}`, {
        method: 'GET',
  
      });
    

      $("datalist").empty();
      fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })

      .then(function (msg) {
        for (let i = 0; i < 10; i++) {
          let movieName = msg[i].show.name;
          let id = msg[i].show.id;

          UIModule.makeSearchList(movieName, id);

        }


      });

      $("input").change(function (event) {

        var value = $(this).val();
        var element = $(`*[value='${value}']`);
        var id = element.attr("data-id");
        window.location.href = `showInfoPage.html#${id}`;
        console.log(window.location.href);
        location.reload();
      });
    });
  }

  return {
    init: init,
    infoPage: infoPage,
    changePage: changePage
  };
})(dataModule, UIModule);