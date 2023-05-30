export function applyDarkTheme(themeChecker) {
  document
    .querySelector('input[type=text]')
    .style.setProperty('--text-color', themeChecker ? '#848383' : '#e5e5e5');
  document.body.style.setProperty(
    '--bg-color',
    themeChecker ? '#fff' : '#191919'
  );
}
