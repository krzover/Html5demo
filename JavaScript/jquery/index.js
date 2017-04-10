$('#get_reg').click(function() {
    console.log('get_reg');
    $.get('http://127.0.0.1:5000/api/register', { name: 'zhangsan1', psw: '123456' }, function(data, status, jqXHR) {
        console.log(data, status, jqXHR);
    })
})


$('#get_login').click(function() {
    console.log('get_login');
    $.post('http://127.0.0.1:5000/api/login', { name: 'zhangsan1', psw: '123456' }, function(data, status, jqXHR) {
        console.log(data, status, jqXHR);
    })
})


$('#postreg').click(function() {
    console.log('111');
    if ($('#inname').val().length == 0 || $('#inpsw').val().length == 0) {
        alert('账号和密码不能为空')
    } else if ($('#inpsw').val().length < 6) {
        alert('密码不能小于6位')
    } else {
        console.log('get_reg');
        $.post('http://127.0.0.1:5000/api/register', { name: $('#inname').val(), psw: $('#inpsw').val() }, function(data, status, jqXHR) {
            console.log(data, status, jqXHR);
        })

    }

})