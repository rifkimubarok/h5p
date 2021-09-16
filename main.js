function getbasepath() {
  return "http://gtkdikdas.kemdikbud.go.id/sayembaravideo/public";
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

function getProvinsi(initialState, combobox, param, curent) {
  let option =
    initialState != false ? `<option value="">${initialState}</option>` : "";
  const url = getbasepath() + `/ajax/region/provinsi/${param}`;
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
