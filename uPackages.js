var packages = {
  "Runner": ["The Original: run any JavaScript",btoa("eval(prompt('Type Code:'))")],
  "Page Editor (On)": ["Edit any page's contents",btoa("document.designMode = 'on'")],
  "Page Editor (Off)": ["Disable Page Editor",btoa("document.designMode = 'off'")],
  "Embed It!": ["Embed almost any webpage in another","ZG9jdW1lbnQud3JpdGUoJzx0aXRsZT4nICsgZG9jdW1lbnQudGl0bGUgKyAnPC90aXRsZT48aWZyYW1lIHNyYz0iJyArIHByb21wdCgiVVJMPyIpICsgJyIgc3R5bGU9ImJvcmRlcjogbm9uZTsgd2lkdGg6MTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowcHg7dG9wOjBweDsiIGFsbG93ZnVsbHNjcmVlbj4nKQ=="],
  "Get Favicon": ["Get the favicon from a website","YWxlcnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWx+PSJpY29uIl0nKS5ocmVmKQ=="],
  "Get Title": ["Get the title from a website",btoa("alert(document.title)")],
  "Change Title": ["Change the title of a website",btoa("document.title = prompt('Title?')")],
  "Canfetti": ["Add confetti to a canvas assignment page",btoa("location.replace(location.href + '?confetti=true')")],
  "PlainPage": ["Remove all stylesheets from websites",btoa("void(document.getElementsByTagName('head')[0].innerHTML = '')")]
}
