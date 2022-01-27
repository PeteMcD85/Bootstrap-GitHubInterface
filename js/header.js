$(document).ready(async function() {

  var viewport = $('meta[name="viewport"]'),
    windowWidth = $(window).width(),
    viewportContent = viewport.attr("content"),
    welcomeContent = $("#cg-welcome").html();
  console.log("viewportContent")
  console.log(viewportContent);
  console.log("welcomeContent")
  console.log(welcomeContent);



  // On Click Event Listeners
  $("#desktopVersion").click(desktopLayoutToggle);

  // appending html content into another div for mobile version
  $(welcomeContent).appendTo($("#cg-welcome-mobile"));

  // Jquery Resize(Function) everytime window resizes, windowWidth variable updates to new window size
  $(window).resize(function() {
    windowWidth = $(window).width();
    viewportContent = viewport.attr("content");
    checkingViewportContent()

    console.log("windowWidth");
    console.log(windowWidth);
    console.log("viewportContent")
    console.log(viewportContent);
    console.log("checkingViewportContent()");
    console.log(checkingViewportContent());

  })

  $(".cg-toggle").click(function() {
    $(this)
      .next()
      .toggleClass("mobile-hide");
    $(this)
      .children("i")
      .toggleClass("fa-angle-double-down fa-angle-double-up");
  });

  function checkingViewportContent() {
    return viewportContent == "width = 1060px, maximum - scale = 1.0, User-scalable=yes" ? "yes" : "no";
  }

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







  // var issue = {
  //     // "title": title,
  //     // "body": bodytext
  // },
  var repoUrl = 'https://api.github.com/repos/PeteMcD85/GitHubInterface',
    $items = $('#firstName, #lastName,#phoneNumber,#address '),
    obj = {};



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   $items.each(function() {
//     obj[this.id] = $(this).val();
//   })
//
//   var json = JSON.stringify(obj);
//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  console.log('repoUrl');
  console.log(repoUrl);
  // console.log('issue');
  // console.log(issue);

  function createIssue(data) {
    return $.ajax({
      type: "POST",
      url: "/repos/PeteMcD85/GitHubInterface/GitHubInterface"
      // contentType: "application/json",
      // dataType: "json",
      // data: JSON.stringify(data)
    }).done(console.log(data);)
  }
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
