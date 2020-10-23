export const fillBody = ():any => {
  var fragment = document.createDocumentFragment();
  var browsers = ['Firefox', 'Chrome', 'Opera',
    'Safari', 'Internet Explorer'];

  var wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper-div');
  fragment.appendChild(wrapper);
  var heading = document.createElement('h2');
  heading.setAttribute('id', 'heading-div');
  heading.innerHTML = ('This is the heading');
  wrapper.appendChild(heading);
  var list = document.createElement('ul');
  wrapper.appendChild(list);
  browsers.forEach(function (browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    list.appendChild(li);
  });

  document.body.appendChild(fragment);
}
