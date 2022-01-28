$(document).ready(async function() {

  var viewport = $('meta[name="viewport"]'),
    windowWidth = $(window).width(),
    viewportContent = viewport.attr("content"),
    welcomeContent = $("#cg-welcome").html(),
    issueButtonText = $("#issueButton").text();
  console.log($("#issueButton").text());
  console.log(issueButtonText);

  // On Click Event Listeners
  $("#desktopVersion").click(desktopLayoutToggle);
  $("#issueButton").click(toggleIssueTextArea);


  // appending html content into another div for mobile version
  $(welcomeContent).appendTo($("#cg-welcome-mobile"));

  // Jquery Resize(Function) everytime window resizes, windowWidth variable updates to new window size
  $(window).resize(function() {
    windowWidth = $(window).width();
    viewportContent = viewport.attr("content");
    checkingViewportContent()
  });
  // end of window.resize()


  // ** click() FUNCTIONS **

  $(".cg-toggle").click(function() {
    $(this)
      .next()
      .toggleClass("mobile-hide");
    $(this)
      .children("i")
      .toggleClass("fa-angle-double-down fa-angle-double-up");
  });

  // ** functions() FUNCTIONS **

  function checkingViewportContent() {
    return viewportContent == "width = 1060px, maximum - scale = 1.0, User-scalable=yes" ? "yes" : "no";
  }
  // end of checkingViewportContent()

  function IssueButtonTextSubmit() {
    console.log($("#issueButton").text() == "Create Issue" ? "no" : "yes");
    console.log(issueButtonText == "Create Issue" ? "no" : "yes");
    console.log('3');
    console.log(issueButtonText);
    console.log('3b');
    console.log($("#issueButton").text());
    return $("#issueButton").text() == "Create Issue" ? "no" : "yes";
  }
  // end ofissueButtonTextSubmit()

  function toggleIssueTextArea() {
    if (IssueButtonTextSubmit() == "no") {
      $(".issue-textarea").removeClass("d-none");
      $("#issueButton").text("Cancel Issue");

      console.log('4');
      console.log(issueButtonText);
      console.log('4b');
      console.log($("#issueButton").text());

    } else if ($("#issueButton").text() == "yes") {
      $(".issue-textarea").addClass("d-none");
      $("#issueButton").text("Submit Issue");
    }
  }
  // end of toggleIssueTextArea()

  function desktopLayoutToggle() {
    if (checkingViewportContent() == "no") {
      viewport.attr("content", "width = 1060px, maximum - scale = 1.0, User-scalable=yes");
      $(".desktop-mobile-view").removeClass("d-sm-none");
      $("#desktopVersion").removeClass("active").removeClass("btn-primary").addClass("btn-light");;
      // $("#desktopVersion")
      $(".desktop-icon").addClass("deactive-desktop-button");
    } else if (checkingViewportContent() == "yes") {
      viewport.attr("content", "width=device-width, initial-scale=1.0");
      $(".desktop-mobile-view").addClass("d-sm-none");
      $("#desktopVersion").addClass("active");
      $(".desktop-icon").removeClass("deactive-desktop-button");
    }
  }
  // end of desktopLayoutToggle()






  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // <div id="created-issue">
  //   <h3 id="issue-title"></h3>
  //   <p id="issue-body"></p>
  // </div>

  // var repoIssuesUrl = "https://api.github.com/repos/PeteMcD85/GitHubInterface/issues",
  //   userName = "PeteMcD85",
  //   repo = "GitHubInterface",
  //   title = "",
  //   body = "";
  //
  // {
  //   "url": "https://api.github.com/repos/PeteMcD85/GitHubInterface/issues/1",
  //   "repository_url": "https://api.github.com/repos/PeteMcD85/GitHubInterface",
  //   "labels_url": "https://api.github.com/repos/PeteMcD85/GitHubInterface/issues/1/labels{/name}",
  //   "comments_url": "https://api.github.com/repos/PeteMcD85/GitHubInterface/issues/1/comments",
  //   "events_url": "https://api.github.com/repos/PeteMcD85/GitHubInterface/issues/1/events",
  //   "html_url": "https://github.com/PeteMcD85/GitHubInterface/issues/1",
  //   "id": 1111976598,
  //   "node_id": "I_kwDOGMcIeM5CR2qW",
  //   "number": 1,
  //   "title": "Create cgGithubInterface button ",
  //   "user": {
  //     "login": "PeteMcD85",
  //     "id": 43708470,
  //     "node_id": "MDQ6VXNlcjQzNzA4NDcw",
  //     "avatar_url": "https://avatars.githubusercontent.com/u/43708470?v=4",
  //     "gravatar_id": "",
  //     "url": "https://api.github.com/users/PeteMcD85",
  //     "html_url": "https://github.com/PeteMcD85",
  //     "followers_url": "https://api.github.com/users/PeteMcD85/followers",
  //     "following_url": "https://api.github.com/users/PeteMcD85/following{/other_user}",
  //     "gists_url": "https://api.github.com/users/PeteMcD85/gists{/gist_id}",
  //     "starred_url": "https://api.github.com/users/PeteMcD85/starred{/owner}{/repo}",
  //     "subscriptions_url": "https://api.github.com/users/PeteMcD85/subscriptions",
  //     "organizations_url": "https://api.github.com/users/PeteMcD85/orgs",
  //     "repos_url": "https://api.github.com/users/PeteMcD85/repos",
  //     "events_url": "https://api.github.com/users/PeteMcD85/events{/privacy}",
  //     "received_events_url": "https://api.github.com/users/PeteMcD85/received_events",
  //     "type": "User",
  //     "site_admin": false
  //   }

  //   function createIssue(data) {
  //       return $.ajax({
  //           type: "POST",
  //           url: "/repos/:owner/:repo/issues",
  //           contentType: "application/json",
  //           dataType: "json",
  //           data: JSON.stringify(data)
  //       }).then(function (response) {
  //           // Return issue number from the response to the promise chain
  //
  //           return response.number;
  //       });
  //   }
  //
  //   function createComment(issueNumber, data) {
  //       return $.ajax({
  //           type: "POST",
  //           url: "/repos/:owner/:repo/issues/" + issueNumber + "/comments",
  //           contentType: "application/json",
  //           dataType: "json",
  //           data: JSON.stringify(data)
  //       });
  //   }
  //
  //   createIssue(issue).then(function (issueNumber) {
  //       return createComment(
  //           issueNumber,
  //           {
  //               // comment details
  //           }
  //       );
  //   }).done(function () {
  //       // callback on successful issue & comment creation
  //   });
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // var issue = {
  //     // "title": title,
  //     // "body": bodytext
  // },
  // var repoUrl = 'https://api.github.com/repos/PeteMcD85/GitHubInterface',
  //   $items = $('#firstName, #lastName,#phoneNumber,#address '),
  //   obj = {};
  //
  //   console.log('repoUrl');
  //   console.log(repoUrl);
  // console.log('issue');
  // console.log(issue);
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //   $items.each(function() {
  //     obj[this.id] = $(this).val();
  //   })
  //
  //   var json = JSON.stringify(obj);
  //   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  // function createIssue(data) {
  //   return $.ajax({
  //     type: "POST",
  //     url: "/repos/PeteMcD85/GitHubInterface/GitHubInterface"
  //     // contentType: "application/json",
  //     // dataType: "json",
  //     // data: JSON.stringify(data)
  //   }).done(console.log(data);)
  // }
  // ++++++++++++++
  // function createComment(issueNumber, data) {
  //   return $.ajax({
  //     type: "POST",
  //     url: "/repos/PeteMcD85/GitHubInterface/issues" + issueNumber + "/comments",
  //     contentType: "application/json",
  //     dataType: "json",
  //     data: JSON.stringify(data)
  //   });
  // }
  //
  // createIssue(issue).then(function(issueNumber) {
  //   return createComment(
  //     issueNumber, {
  //       // comment details
  //     }
  //   );
  // }).done(function() {
  //   // callback on successful issue & comment creation
  // });



});
// end of docReady
