function addUser() {
  // tạo đối tượng
  event.preventDefault();

  // gọi tới các thuộc tính trong đối tượng rồi gán dữ liệu người dùng nhập vào
  var _email = document.getElementById("txtemail").value;
  var _password = document.getElementById("txtPassword").value;
  var _name = document.getElementById("txtName").value;
  var _gender = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;
  var _phone = document.getElementById("txtPhone").value;
  let _passwordConfirm = document.getElementById("txtPasswordConfirm").value;
  var valid = true;
  valid =
    kiemTraRong(_name, "tbName") &
    kiemTraRong(_phone, "tbPhone") &
    kiemTraRong(_email, "tbemail") &
    kiemTraEmail(_email, "tbemail") &
    kiemTraPassword(_password, "tbPassword") &
    kiemTraPassword(_passwordConfirm, "tbPasswordConfirm") &
    kiemTraKyTu(_name, "tbName") &
    kiemTraPassConfirm(_password, _passwordConfirm, "tbPasswordConfirm");

  if (!valid) {
    return;
  }
  var users = new User(_email, _password, _name, _gender, _phone);
  console.log(users);

  if (users) {
    var promise = axios({
      url: `https://shop.cyberlearn.vn/api/Users/signup`,
      method: "post",
      data: users,
    });
    promise.then(function (res) {
      console.log(res);
      alert("Đăng Kí Tài Khoản Thành Công");
    });
    promise.catch(function (err) {
      console.log(err);
    });
  }
}
