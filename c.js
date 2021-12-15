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
$http({
    method: 'POST',
    url: '/test',
    params: {
        cycle: key,
        emp_id: user.id
    },
    //  新增content-type头部属性
    heads: {
        'content-type': 'application/x-www-form-urlencoded'
    }
}).success(function(resp) {
    //  处理逻辑
});
$http({
    method: 'POST',
    url: '/test',
    //  以表单方式提交，将Object转换为form参数方式
    data: $httpParamSerializer({
        cycle: key,
        emp_id: user.id
    }),
    //  新增content-type头部属性
    heads: {
        'content-type': 'application/x-www-form-urlencoded'
    }
}).success(function(resp) {
    //  处理逻辑
});