function kiemTraRong(value, idthongbao) {
  if (value) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idthongbao).style.display = "inline-block";
    document.getElementById(idthongbao).innerHTML = "không được bỏ trống!";
    return false;
  }
}

function kiemTraEmail(value, idthongbao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(value) && value != "") {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  } else if (!regexEmail.test(value) && value != "") {
    console.log(regexEmail.test(value));
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(idthongbao).innerHTML = `email không hợp lệ !`;
    return false;
  }
}

function kiemTraSo(value, idthongbao) {
  var regex = /^[0-9]+$/;
  if (regex.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  }
  document.getElementById(idthongbao).innerHTML = `không hợp lệ !`;
  return false;
}

function kiemTraKyTu(value, idthongbao) {
  var regex = /[a-zA-Z]/g;
  if (regex.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  } else if (!regex.test(value) && value != "") {
    document.getElementById(idthongbao).style.display = "inline-block";
    document.getElementById(idthongbao).innerHTML = `tên không hợp lệ !`;
    return false;
  }
}

function kiemTraDoDai(value, idthongbao, minLength, maxLength) {
  if (value.trim().length < minLength || value.trim().length > maxLength) {
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(
      idthongbao
    ).innerHTML = `tài khoàn Nhân Viên từ ${minLength} - ${maxLength} ký tự !`;
    return false;
  }
  document.getElementById(idthongbao).innerHTML = ``;
  return true;
}

function kiemTraPassword(value, idthongbao) {
  var regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

  if (regex.test(value)) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  }
  document.getElementById(idthongbao).style.display = "inline-block";

  document.getElementById(
    idthongbao
  ).innerHTML = `mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
  để trống !`;
  return false;
}

function kiemTraPassConfirm(password, passwordConfirm, idthongbao) {
  if (password == passwordConfirm) {
    document.getElementById(idthongbao).innerHTML = "";
    return true;
  } else if (password !== passwordConfirm) {
    document.getElementById(idthongbao).style.display = "inline-block";

    document.getElementById(idthongbao).innerHTML = `password không trùng khớp`;
    return false;
  }
}
