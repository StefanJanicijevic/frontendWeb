<template>
  <div>
      <h1>
          Posts
      </h1>
      
      <h3> Add new post </h3>
                  <div>
                      <label>Title    </label>
                      <input type="email" class="form-control" placeholder="title" id="title" v-model = "post.title" required>
                  </div>

                  <div>
                      <label>Text    </label>
                      <input type="text" class="form-control" placeholder="text" id="text" v-model = "post.text" required>
                  </div>

                  <div>    
                      <label>Author    </label>
                      <input type="text" class="form-control" placeholder="author" id="author" v-model = "post.author" required>
                  </div>
                  
                  <div>
                      <label>Category id    </label>
                      <input type="text" class="form-control" placeholder="category name" id="category_name" v-model = "post.category.name" required>
                  </div>

                  <input type="submit" value="Add Post" @click = "addPost()"> 

      <div class="posts-list row">
          <div  style="border:1px solid black;" v-for = "post in posts" v-bind:key="post.id">
                  <h1 class="card-title">Title: {{post.title}}</h1>
                  <h2 class="card-title">Text: {{post.text}}</h2>
                  <h3 class="card-title">Author: {{post.author}}</h3>
                  <h4 class="card-title">Category: {{post.category.name}}</h4>
                  <button type="button" id="delete-post" @click="deletePost(post.id)" >Delete"</button>
                    <button type="button" id="update-post" @click="updatePost(post.id)" >Delete"</button>

              </div>
          </div>
      </div>
              
  
</template>

<script>
    import axios from 'axios';

    export default {
      name: 'Post',

      data() {
        return{
          post: {title: '', text: '', author: '', category: ''},
          posts: []
        }
      },

      
      methods: {

         loadAllPosts(){
          axios.get('http://localhost:8000/posts/listAllPosts', this.posts)
          .then(response => {
            this.posts = response.data
          })
          },


          addPost() {
            let newPost = {
                title: this.post.title,
                text: this.post.text,
                author: this.post.author,
                category: this.post.category
            }
            console.log(newPost);


            let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

            axios.post('http://localhost:8000/posts/addPost', newPost, config)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        deletePost(id)
      {
         console.log(id)
        let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }

         axios.delete('http://localhost:8000/posts/deletePost'+id , config)
            .then(() => {
            
            })
            .catch((error) => {
               console.log(error);
            });
            
      } ,
      editPost(id)
      {
         let updatedPost = {
            title: this.post.title,
                text: this.post.text,
                author: this.post.author,
                category: this.post.category
         }
         let config = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`
                }
            }
         console.log(id)
         axios.put('http://localhost:8000/posts/updatePost'+id, updatedPost,config)
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
            
      }
          },
      

      mounted() {
        this.loadAllPosts()
        //console.log(this.categories.name)
      },

    }
    </script>