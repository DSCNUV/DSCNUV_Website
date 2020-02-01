/* -------------------------------------------------------------
        EVENTS RENDERING
------------------------------------------------------------- */

// Data

$.holdReady(true);
$.getJSON("data/events.json", (data, status) => {
  let events = data;

  // Presentation
  const eventsContainer = $(".events-slider");
  let htmlEvents = "";
  events.forEach(event => {
    htmlEvents += buildEvent(event);
  });
  eventsContainer.html(htmlEvents);
  $.holdReady(false);
});

function buildEvent(event) {
  let title = event && event.title ? event.title : "Add Event title";
  let description = event && event.description ? event.description : "";
  let date = event && event.date ? event.date : "date";
  let location =
    event && event.location ? event.location : "Navrachna University";
  let btnText = event && event.btnText ? event.btnText : "Register Now";
  let btnLink = event && event.btnLink ? event.btnLin : "#";
  let imageUrl =
    event && event.imageUrl ? event.imageUrl : "assets/images/events/e1.png";

  return `
<div class="events-slider-item">
  <div class="card">
    <img
      src="${imageUrl}"
      class="card-img-top"
    />
    <div class="card-body text-center">
      <h3 class="card-title">${title}</h3>
      <p class="card-text">${description}</p>
      <hr />
      <ul class="event-info list-inline">
        <li class="list-inline-item">
          <i class="far fa-calendar-alt"></i>${date}
        </li>
        <li class="list-inline-item">
          <i class="fas fa-map-marker-alt"></i>${location}
        </li>
      </ul>

      <a href="${btnLink}" class="btn btn-primary">${btnText}</a>
      <!-- <a href="#" class="btn">Learn More</a> -->
    </div>
  </div>
</div>
`;
}
/* -------------------------------------------------------------
          SHOWCASE RENDERING
------------------------------------------------------------- */

// Data

$.holdReady(true);
$.getJSON("data/achievements.json", (data, status) => {
  let achievements = data;
  // Presentation
  const achievementsContainer = $(".hall-of-fame-slider");
  let htmlAchievements = "";
  achievements.forEach(achievement => {
    htmlAchievements += buildAchievement(achievement);
  });
  achievementsContainer.html(htmlAchievements);
  $.holdReady(false);
});

function buildAchievement(achievement) {
  let title =
    achievement && achievement.title
      ? achievement.title
      : "Add achievement title";
  let description =
    achievement && achievement.description ? achievement.description : "";
  let name =
    achievement && achievement.name ? achievement.name : "Add Achiever's Name";
  let image =
    achievement && achievement.image
      ? achievement.image
      : "assets/images/achievements/achievement1.jpg";

  return `
  <div class="slider-item">
    <div class="image">
      <img
        src="${image}"
        class="img-rounded img-fluid"
      />
      <div class="overlay-content">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </div>
    <h4 class="title">${name}</h4>
  </div>
`;
}
/* -------------------------------------------------------------
        TEAMS RENDERING
------------------------------------------------------------- */

// Data

$.holdReady(true);
$.getJSON("data/teams.json", (data, status) => {
  let teams = data;
  // Presentation
  const teamsContainer = $(".teams .section-body");
  let htmlteams = "";
  Object.keys(teams)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .forEach(year => {
      const team = teams[year];
      htmlteams += buildTeam(year, team);
    });
  teamsContainer.html(htmlteams);
  $.holdReady(false);
});

function buildTeam(year, team) {
  let htmlTeam = "";
  team.forEach(memeber => {
    htmlTeam += buildTeamMember(memeber);
  });
  return `
  <div class="team">
  <h1 class="year">${year}</h1>
  <div class="team-slider">
    ${htmlTeam}
  </div>
</div>
    `;
}

function buildTeamMember(memeber) {
  let name = memeber && memeber.name ? memeber.name : "Add memeber Name";
  let description = memeber && memeber.description ? memeber.description : "";
  let role = memeber && memeber.role ? memeber.role : "PRESIDENT";
  let social = memeber && memeber.social ? memeber.social : [];
  let profilePic =
    memeber && memeber.profilePic
      ? memeber.profilePic
      : "assets/images/teams/placeholder.png";

  return `
    <div class="slider-item">
              <div class="card text-center">
                <div class="profile-pic bg-white px-5 pt-4">
                  <img
                    src="${profilePic}"
                    class="card-img-top rounded-circle"
                  />
                </div>
                <div class="card-body text-center">
                  <p class="card-title">${name}</p>
                  <p class="card-text">${role}</p>
                  <p>${description}</p>
                </div>
                <ul class="social list-inline text-center">
                  <li class="list-inline-item">
                    <a href="${
                      social.instagram ? social.instagram : "#"
                    }" target="_blank"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="${
                      social.facebook ? social.facebook : "#"
                    }" target="_blank"><i class="fab fa-facebook-square"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="${
                      social.linkedin ? social.linkedin : "#"
                    }" target="_blank"><i class="fab fa-linkedin"></i> </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="${
                      social.github ? social.github : "#"
                    }" target="_blank"><i class="fab fa-github"></i></a>
                  </li>
                </ul>
              </div>
            </div>
    
    `;
}
