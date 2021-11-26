$(() => {
  $(".menuIcon").click(() => {
    $(".mobMune").slideToggle();
  });
});
window.addEventListener("resize", () => {
  console.log(window.screen.width);
  if (window.screen.width) {
    $(() => {
      $(".mobMune").hide();
    });
  }
});
