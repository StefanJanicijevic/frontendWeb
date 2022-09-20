<template>
    <div>
        <h1>
            Categories
        </h1>
        
        <h2> Add new category </h2>
                    
            <label>    Name:    </label>
            <input type="text" class="form-control" placeholder="name" id="name"  v-model = "category.name" required>
            <label>    Description:    </label>
            <input type="text" class="form-control" placeholder="description" id="description" v-model = "category.description" required>
            <div>
            <input type="submit" value="Add Category" @click = "addCategory()"> 
            </div>

            <div class="posts-list row">
            <div style="border:1px solid black" v-for = "category in categories" v-bind:key="category.id">
                <div class="card-body">
                    <h1 class="card-title">Name: {{category.name}}</h1>
                    <h2 class="card-title">Description: {{category.description}}</h2>
                    <button type="button" id="edit-category">Edit</button>
                    <button type="button" id="delete-category" @click="deleteCategory(category.id)" >Delete"</button>
                    <button type="button" id="update-category" @click="updateCategory(category.id)" >Delete"</button>

                  </div>
            </div>
        </div>
                  

    </div>
</template>


<script>
    import axios from 'axios';

    export default {
      name: 'Category',

      data() {
        return{
          category : { name: '', description: ''},
          categories: []
        }
      },
      
      methods: {


         loadAllCategories(){
          axios.get('http://localhost:8000/categories/listAllCategories', this.categories)
          .then(response => {
            this.categories = response.data
          })
         
         .catch((error) =>{
               console.log(error);
         })
          },

          addCategory() {
            let newCategory = {
                name: this.category.name,
                description: this.post.description,
            }
            console.log(newPost);


            let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

            axios.post('http://localhost:8000/categories/addCategories', newCategory, config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        deleteCategory(id)
      {
         console.log(id)
        let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

         axios.delete('http://localhost:8000/categories/deleteCategory'+id , config)
            .then(() => {
            
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
      editCategory(id)
      {
         let updatedCategory = {
            name: this.category.name,
                description: this.category.description,
         }
         let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }
         console.log(id)
         axios.put('http://localhost:8000/categories/updateCategory'+id, updatedCategory,config)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
            
      }

    },
      
      

      mounted() {
        this.loadAllCategories()
      }
    }
    
    </script>