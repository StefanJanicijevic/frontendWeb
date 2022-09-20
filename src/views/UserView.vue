<template>
    <div>
        <h1>
            Users
        </h1>
        
        <h3> Add new user </h3>
                    <div>
                        <label>Email    </label>
                        <input type="email" class="form-control" placeholder="email" id="email" required>
                    </div>

                    <div>
                        <label>First Name    </label>
                        <input type="text" class="form-control" placeholder="first name" id="first_name" required>
                    </div>

                    <div>    
                        <label>Last Name    </label>
                        <input type="text" class="form-control" placeholder="last name" id="last_name" required>
                    </div>
                    
                    <div>
                        <label>User type    </label>
                        <input type="text" class="form-control" placeholder="user type" id="user_type" required>
                    </div>

                    <div>
                        <label>Status    </label>
                        <input type="text" class="form-control" placeholder="status" id="status" required>
                    </div>

                    <div>
                        <label>password    </label>
                        <input type="password" class="form-control" placeholder="password" id="password" required>
                    </div>

                    <input type="submit" value="Add User" @click = "addUser()"> 

        <div class="posts-list row">
            <div class="card mt-4 col-md-6 bg-ligt" v-for = "user in users" v-bind:key="user.id">
                    <h1 class="card-title">Email: {{user.email}}</h1>
                    <h2 class="card-title">First Name: {{user.first_name}}</h2>
                    <h3 class="card-title">Last Name: {{user.last_name}}</h3>
                    <h4 class="card-title">User type: {{user.user_type}}</h4>
                    <h5 class="card-title">Status: {{user.status}}</h5>
                    <h6 class="card-title">Password: {{user.password}}</h6>
                    <button type="button" id="edit-post">Edit</button>
                </div>
            </div>
        </div>
                
</template>


<script>
    import axios from 'axios';

    export default {
      name: 'User',

      data() {
        return{
          user: {email: '', firstName:'', lastName:'', userType:'', status:'', password:''},
          users: []
        }
      },
      
      methods: {

         loadAllusers(){
          axios.get('http://localhost:8000/users/listAllUsers', this.users)
          .then(response => {
            this.users = response.data
          })
          },


          addUser() {
            let newUser = {
                email: this.user.email,
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                userType: this.user.userType,
                status: this.user.status,
                password: this.user.password
            }
            console.log(newPost);


            let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

            axios.post('http://localhost:8000/categories/addCategories', newUser, config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

        },
      },

      

      mounted() {
        this.loadAllusers()
        //console.log(this.categories.name)
      },

    }
    </script>