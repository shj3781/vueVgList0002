/*
  Appearing directly below is your array of items!  The array
  consists of two properties: "series" and "titles."  The value for 
  the latter is yet another array consisting of yet another series 
  of objects; be sure to keep a close eye on what the properties within 
  those objects are! (i.e., each one has a "subtitle," "year," "platform," etc.)
*/

const gamesLibrary = [
    {
      series: "Fire Emblem",
      subtitle: "Shadow Dragon",
      summary: {
        year: 2006,
        platform: "Nintendo DS",
        history: "The first game in the series, originally for the Famicom in Japan, remade with new graphics and sound, as well as new story elements and game features.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Fire Emblem",
      subtitle: "The Blazing Blade",
      summary: {
        year: 2003,
        platform: "Game Boy Advance",
        history: "Due to interest in the characters from 'Super Smash Bros. Melee' as well as the release of 'Advance Wars' (a similar tactics series for Game Boy Advance), this is the first iteration of the series to be localized outside of Japan.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Fire Emblem",
      subtitle: "The Sacred Stones",
      summary: {
        year: 2005,
        platform: "Game Boy Advance",
        history: "The second iteration of the series to be localized outside of Japan.",
        publisher: "Nintendo",
      },
      showDetail: false
    },
    {
      series: "Fire Emblem",
      subtitle: "Path of Radiance",
      summary: {
        year: 2005,
        platform: "Nintendo Gamecube",
        history: "The first home platform iteration of the series to be localized for North America, and one of the rarest.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Fire Emblem",
      subtitle: "Radiant Dawn",
      summary: {
        year: 2007,
        platform: "Nintendo Wii",
        history: "A direct sequel to Path of Radiance, Radiant Dawn both expands upon and is an enhancement of the content of its predecessor to form one continuous, sprawling epic.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Fire Emblem",
      subtitle: "Awakening",
      summary: {
        year: 2012,
        platform: "Nintendo 3DS",
        history: "Originally conceived as a finale of the series due to declining sales, Awakening proved to be a massive success and revitalized Fire Emblem as a major franchise.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Super Mario",
      subtitle: "Super Mario Galaxy",
      summary: {
        year: 2007,
        platform: "Nintendo Wii",
        history: "More info coming soon.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Super Mario",
      subtitle: "Super Mario Galaxy 2",
      summary: {
        year: 2010,
        platform: "Nintendo Wii",
        history: "More info coming soon.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Super Mario",
      subtitle: "Super Mario 3D World",
      summary: {
        year: 2013,
        platform: "Nintendo Wii U",
        history: "More info coming soon.",
        publisher: "Nintendo"
      },
      showDetail: false
    },
    {
      series: "Final Fantasy",
      subtitle: "Final Fantasy",
      summary: {
        year: 1990,
        platform: "Nintendo Entertainment System(NES)",
        history: "More info coming soon.",
        publisher: "SquareSoft"
      },
      showDetail: false
    },
    {
      series: "Final Fantasy",
      subtitle: "Final Fantasy II",
      summary: {
        year: 1992,
        platform: "Super Nintendo Entertainment System(NES)",
        history: "More info coming soon.",
        publisher: "SquareSoft"
      },
      showDetail: false
    }
];



/*
  Directly below is the Vue "instance" which is mounted to 
  the HTML element with the ID of "games-list," which in this
  case pertains to the <div> element directly underneath the 
  <div> that has the ID of "add-games-to-list" in the "index.html" file.
  
  Take NOTE! That the "gamesLibrary" array above is assigned as
  the value for the "gamesList" property in the "data" object
  of the Vue instance.
*/

const app = new Vue({
  el: '#games-list',
  data: {
    title: 'GameBrain Library',
    gamesList: gamesLibrary,
    series: ''
  },
  methods: {
    toggleDetails: (game) => {
      console.log(game);
      game.showDetail = !game.showDetail
    },
    filterList: function() {
      this.series = event.target.value;
      console.log(this.series);
    },
    addGame: function () {
      var text;
      text = this.newGame.trim();
      if(text) {
        this.gamesList.push({
          text: text,
          checked: false
        });
        this.newGame = '';
      }
    }
  },
/*
  Here's the stuff that has to do with the 'Computed Properties'
  thing I wrote a small novel about in 'index.html'!  What appears 
  directly below is a newly-created 'computed' property whose value
  is an object which contains a function that effectively looks at
  your list of games (or more accurately your various *series* of
  games as seen in the 'gamesLibrary' array), eliminates any 
  duplicates of the 'series' property, and returns a new list
  (which is in the form of a new array).  In this case, since I
  thus far only have a single solitary 'series,' that being "Fire
  Emblem," the array that is returned only contains a single item
  as the <option> in 'index.html': "Fire Emblem"!
*/
  computed: {
    uniqueItemsList: function() {
      const differentSeries = [];
      this.gamesList.forEach((series)=>{
        if(!differentSeries.includes(series.series)){
          differentSeries.push(series.series);
        }
      });
      return differentSeries;
    }
  }
});

