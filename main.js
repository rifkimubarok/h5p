function getbasepath() {
  return "https://sayembara.webapps.my.id/api";
}

function request(url, type, data, callback) {
  var header = {
    Accept: "application/json",
  };
  if (typeof API_TOKEN !== "undefined") {
    header.Authorization = `Bearer ${API_TOKEN}`;
  }
  $.ajax({
    url: url,
    type: type,
    headers: header,
    dataType: "json",
    data: data,
    success: function (result) {
      return callback(result);
    },
    error: function (x, y, z) {
      if (x.responseJSON != undefined) {
        let ex = x.responseJSON;
        ex.success = false;
        return callback(ex);
      } else {
        return callback({
          success: false,
          message: "Terjadi sebuah kesalahan",
        });
      }
    },
  });
}

function getProvinsi(initialState, combobox, curent) {
  let option =
    initialState != false ? `<option value="">${initialState}</option>` : "";
  const url = getbasepath() + `/ajax/region/provinsi`;
  request(url, "get", null, function (result) {
    if (result.success) {
      const { data } = result;
      data.forEach((item) => {
        const selected = item.kode_wilayah === curent;
        const selectedHtml = selected ? "selected" : "";
        option += `<option value="${item.kode_wilayah}" ${selectedHtml}>${item.nama}</option>`;
      });
      combobox.html(option);
    } else {
      combobox.html(option);
    }
  });
}

function getKabupaten(initialState, combobox, param, curent, single) {
  let option =
    initialState != false ? `<option value="">${initialState}</option>` : "";
  const url =
    getbasepath() +
    `/ajax/region/kabupaten/${param}` +
    (single ? `/${curent}` : "");
  request(url, "get", null, function (result) {
    if (result.success) {
      const data = result.data;
      data.forEach((item) => {
        const selected = item.kode_wilayah === curent;
        const selectedHtml = selected ? "selected" : "";
        option += `<option value="${item.kode_wilayah}" ${selectedHtml}>${item.nama}</option>`;
      });
      combobox.html(option);
    } else {
      combobox.html(option);
    }
  });
}

function getKecamatan(initialState, combobox, param, curent, single) {
  let option =
    initialState != false ? `<option value="">${initialState}</option>` : "";
  const url =
    getbasepath() +
    `/ajax/region/kecamatan/${param}` +
    (single ? `/${curent}` : "");
  request(url, "get", null, function (result) {
    if (result.success) {
      const data = result.data;
      data.forEach((item) => {
        const selected = item.kode_wilayah === curent;
        const selectedHtml = selected ? "selected" : "";
        option += `<option value="${item.kode_wilayah}" ${selectedHtml}>${item.nama}</option>`;
      });
      combobox.html(option);
    } else {
      combobox.html(option);
    }
  });
}

function getKelurahan(initialState, combobox, param, curent, single) {
  let option =
    initialState != false ? `<option value="">${initialState}</option>` : "";
  const url =
    getbasepath() +
    `/ajax/region/kelurahan/${param}` +
    (single ? `/${curent}` : "");
  request(url, "get", null, function (result) {
    if (result.success) {
      const data = result.data;
      data.forEach((item) => {
        const selected = item.kode_wilayah === curent;
        const selectedHtml = selected ? "selected" : "";
        option += `<option value="${item.kode_wilayah}" ${selectedHtml}>${item.nama}</option>`;
      });
      combobox.html(option);
    } else {
      combobox.html(option);
    }
  });
}

const test = () => {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open(
    "GET",
    "http://gtkdikdas.kemdikbud.go.id/sayembaravideo/public/ajax/region/provinsi"
  );
  xhr.setRequestHeader(
    "Cookie",
    "XSRF-TOKEN=eyJpdiI6IjZUdFpYdGVhUm5MRjNGSnlWK0IvWUE9PSIsInZhbHVlIjoiWUkvQm40aUFMZ2gxbmtPc1VnOFRaV3pkQWxTSW1aM3B5OXZOdmJHMkxJNC9oWXhNam01ZTlTSno0bWhJM0R1akgyaTFLMm15OEM4ckNRUzNwQ1dDR0hSUW9lVjlXazZlN0IzTE5WVW9JZ2ZFSDFkc2g3dU0rZlhaU242NVZmeWsiLCJtYWMiOiI5M2IyZmUzNjQ3NmE0ZDA1OWE5NWFiMmIyMjQzYTgzOWQ5MmM5ZDMyZGM0MDNhMmM2MjMxNWM0N2Q2OThjODA4In0%3D; sayembara_video_session=eyJpdiI6InhZbjBNWVhGTENxZXdmUWtNQVk0SWc9PSIsInZhbHVlIjoiYWMya20vUmo2eU1PSTE0dWR2T3NXbHdFOGdaTUpCeFpRajV2RWdXUnJOQXF5dXg3OVd2aVRaOHNDYit5MUdkN1pxZjBBd1JYcER1QzdUektLWUN4R283RWY0N05Pb1RjNlowdGg1OXJZOEwzVXJsRTVmNXlUdVpWOWhRdWs2b1oiLCJtYWMiOiIyZmEzNzhlM2M4YTM0MGJjMWVjODBiMmI3NzM0OGU2YWI1OTg4ZjhhYTEyYTExMDJkOWI4MmQ2MDQ4ZjQ2NjFiIn0%3D"
  );

  xhr.send();
};
