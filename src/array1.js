var users = [];
function add(){
    var user_id = document.getElementById("cccd").value;
    var user_name = document.getElementById("name").value;
    var user_age = document.getElementById("age").value;
    var user_address = document.getElementById("address").value;
    
    var user = {
        ID : user_id,
        Name : user_name,
        Age : user_age,
        Address : user_address,
    }

    let index = users.findIndex((item)=> item.ID == user.ID)
    
    if(index >= 0){
      users.splice(index,1,user)      
    }else{
        users.push(user)
    }


    render();
    clear();
}
function render(){
    table = `
    <tr>
        <th>Căn Cước Công Dân</th>
        <th>Họ và Tên</th>
        <th>Tuổi</th>
        <th>Địa Chỉ</th>
        <th>Thao Tác</th>
    </tr>`
    for(let i = 0; i < users.length; i++){
        table += `<tr>
            <th>${users[i].ID}</th>
            <th>${users[i].Name}</th>
            <th>${users[i].Age}</th>
            <th>${users[i].Address}</th>
            <th>
                <button onclick = "deleteItem(${users[i].ID})"> Xóa </button>
                <button type="button" onclick = "editItem(${users[i].ID})"> Chỉnh sửa </button>
            </th>
        </tr>`
    }
    document.getElementById("render").innerHTML= table
}

function clear(){
    document.getElementById("cccd").value="";
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("address").value="";
}

function deleteItem(x){
    for(let i = 0 ; i < users.length; i++){
        if(users[i].ID == x ){
            users.splice(i,1);
            render();
        }
    }
}

function editItem (x){
    for (let i = 0; i < users.length; i++){
        if (users[i].ID == x){
            document.getElementById("cccd").value= users[i].ID
            document.getElementById("name").value= users[i].Name
            document.getElementById("age").value= users[i].Age
            document.getElementById("address").value= users[i].Address
        }
        console.log(users[i]);
    } 
}