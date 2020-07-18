const zeroPad = (num, places) => String(num).padStart(places, '0');

export function tsvJSON(tsv) {
  var lines = tsv.split('\n');
  var result = [];
  var headers = lines[0].split('\t');
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split('\t');
    for (var j = 0; j < headers.length; j++) {
      if (headers[j] !== 'data') {
        obj[headers[j]] = parseInt(currentline[j]);
      } else {
        let parts = currentline[j].split('-');
        let d = new Date(parts[0], parts[1], parts[2]);
        obj[headers[j]] =
          zeroPad(d.getDate(), 2) + '/' + zeroPad(d.getMonth(), 2);
      }
    }
    result.push(obj);
  }
  return result
    .filter((data) => !isNaN(data.confirmados))
    .filter((data) => !isNaN(data.recuperados))
    .filter(
      (data) =>
        data.confirmados !== 0 || data.recuperados !== 0 || data.obitos !== 0
    );
}
