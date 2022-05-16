
    let col4 = document.getElementById('col4');
    let col6 = document.getElementById('col6');
    let form = document.getElementById('logform');
    let email = form['email']
    let error = document.getElementById('error')


    function getid(id, value){
        id = document.getElementById(id);
        return id.innerHTML=value
    }
    col6.style.display='none'
    form.addEventListener('submit', (e)=>{
            e.preventDefault();
            email = email.value
            // console.log(email)
        fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
    })
    .then( (response) =>{
        return response.json();
    })
    .then((users) =>{
        // console.log(users);
    for (let i = 0; i < users.length; i++) {
                // console.log(users[i]);
                if (users[i]['email'] === email) {
                    // console.log(users[i])
                    let name = users[i]['name']
                    let email_ = users[i]['email']
                    let phone = users[i]['phone']
                    let username = users[i]['username']
                    let company = users[i]['company']['name']
                    let website = users[i]['website']
                    let city = users[i]['address']['city']
                    let suite = users[i]['address']['suite']
                    let street = users[i]['address']['street']
                    let zip_code = users[i]['address']['zipcode']
                    // function getvalue(variable, i, key, output){
                    //     variable = users[i][key]
                    //     output(variable);
                    // }

                    // console.log (getvalue(name, i, 'name', (id, name)={
                    //     // let name =  users[i]['name']
                    // }))
                    console.log(users[i]['email'])
                    getid('name', name);
                    getid('username', username);
                    getid('phone', phone);
                    getid('email_', email_);
                    // document.getElementById('email').innerHTML= users[i]['email']
                    getid('website', website);
                    getid('city', city);
                    getid('company', company);
                    getid('suite', suite);
                    getid('zip_code', zip_code);
                    getid('street', street);
                    // console.log(users[i]['company']['name']);
                    // console.log(users[i]['address']);
                    col6.style.display='block'
                    col4.style.display='none'
                }else{
                    error.innerHTML= 'User not found'
                }
             
         }
    //    console.log (users[0]['username'])
 
  })
  .catch(function(error) {
                console.log(error);})
    })
    
 

