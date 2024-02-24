var packages = {
  "Runner": ["The Original: run any JavaScript",btoa("eval(prompt('Type Code:'))")],
  "Page Editor (On)": ["Edit any page's contents",btoa("document.designMode = 'on'")],
  "Page Editor (Off)": ["Disable Page Editor",btoa("document.designMode = 'off'")],
  "Embed It!": ["Make almost any webpage another","ZG9jdW1lbnQud3JpdGUoJzx0aXRsZT4nICsgZG9jdW1lbnQudGl0bGUgKyAnPC90aXRsZT48aWZyYW1lIHNyYz0iJyArIHByb21wdCgiVVJMPyIpICsgJyIgc3R5bGU9ImJvcmRlcjogbm9uZTsgd2lkdGg6MTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowcHg7dG9wOjBweDsiIGFsbG93ZnVsbHNjcmVlbj4nKQ=="],
  "Get Favicon": ["Get the favicon from a website","YWxlcnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWx+PSJpY29uIl0nKS5ocmVmKQ=="],
  "Get Title": ["Get the title from a website",btoa("alert(document.title)")],
  "Change Title": ["Change the title of a website",btoa("document.title = prompt('Title?')")],
  "Canfetti": ["Add confetti to a canvas assignment page",btoa("location.replace(location.href + '?confetti=true')")],
  "PlainPage": ["Remove all stylesheets from websites",btoa("void(document.getElementsByTagName('head')[0].innerHTML = '')")],
  "webdestroyer": ["Destroy webpages with a simple stylesheet","dm9pZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaGVhZCIpWzBdLmlubmVySFRNTCA9ICI8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2h0dHBzOi8vY3RleHBlcmltZW50cy5wYWdlcy5kZXYvYm9va21hcmtoYWNrcy9jb2xvcnN3aXRjaGVyLmNzcyc+PHRpdGxlPiIgKyBkb2N1bWVudC50aXRsZSArICIsIGRlc3Ryb3llZCBieSB3ZWJkZXN0cm95ZXI8L3RpdGxlPiIp"],
  "die-Ready": ["Destroy i-Ready","dm9pZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaGVhZCIpWzBdLmlubmVySFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJoZWFkIilbMF0uaW5uZXJIVE1MICsgIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9jdGV4cGVyaW1lbnRzLnBhZ2VzLmRldi9ib29rbWFya2hhY2tzL2NvbG9yc3dpdGNoZXIuY3NzJz48dGl0bGU+ZGllLVJlYWR5PC90aXRsZT4iKQ=="],
  "Full Screen Hider, from Hapara Hider": ["Click a button to open a website","ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIjxicj48YnV0dG9uIHN0eWxlPSdwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDoxcHg7IHRvcDogMXB4Oycgb25jbGljaz0ndWJyb3dzZXJfZnJhbWUucmVxdWVzdEZ1bGxzY3JlZW4oKSc+T3BlbkhTPC9idXR0b24+PGlmcmFtZSBpZD0ndWJyb3dzZXJfZnJhbWUnIHNyYz0nIiArIHByb21wdCgiU2l0ZSB0byBlbWJlZD8iKSArICInIHN0eWxlPSd3aWR0aDoxcHg7aGVpZ2h0OjFweDsnPjwvaWZyYW1lPiIp"],
  "Full Screen Hider: Change Website": ["Change Full Screen Hider website",btoa("void(ubrowser_frame.src = prompt('Site to Embed?'))")]
}
