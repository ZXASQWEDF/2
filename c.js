function CheckPassword(Password) {
    if (Password != "leewn") {
        alert("密碼錯誤!")
    } else {
        window.open("https://zxasqwedf.github.io/2/复查日期.html")
    }
}
$http({
    method: 'POST',
    url: '/test',
    params: {
        cycle: key,
        emp_id: user.id
    }
}).success(function(resp) {
    //  处理逻辑
});