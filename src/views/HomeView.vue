<template>
    <div>
        <h1>
            Posts
        </h1>
        
        <div class="posts-list row">
            <div  style="border:1px solid black;" v-for = "post in posts" v-bind:key="post.id">
                    <h1 class="card-title">Title: {{post.title}}</h1>
                    <h2 class="card-title">Text: {{post.text}}</h2>
                    <h3 class="card-title">Author: {{post.author}}</h3>
                    <h4 class="card-title">Category: {{(post.category.name)}}</h4>
                </div>
            </div>
        </div>
                
    
</template>


<script>
    import axios from 'axios';

    export default {
      name: 'Home',

      data() {
        return{
          title: '',
          text:'',
          author:'',
          category_id:'',
          posts: [],
          categories: []
        }
      },
      
      methods: {

         loadAllPosts(){
          axios.get('http://localhost:8000/posts/listAllPosts', this.posts)
          .then(response => {
            this.posts = response.data
          })
          },

          loadAllCategories(){
          axios.get('http://localhost:8000/categories/listAllCategories', this.categories)
          .then(response => {
            this.categories = response.data
          })  
          },
          
      },

      mounted() {
        this.loadAllPosts()
      },

    }

    </script>