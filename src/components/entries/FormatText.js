export function FormatText(txt) {
  const txtData = txt.split('\n').filter(p => p.length > 0);
  return txtData;
}