<template>
  <v-container>
    <v-row>
      <v-col cols='12' md='10' lg='10'>
        <v-card class='px-10 py-10'>
          <v-img src="https://picsum.photos/500/500" max-height='400'></v-img>
          <br>
          <h3>{{ post.title }}</h3>
          <br>
          <p>{{ post.body }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    async getPost() {
      const postID = this.$route.params.id
      const res = await this.$axios.get(`https://gorest.co.in/public/v1/posts/${postID}`)
      this.post = res.data.data
    }
  }
}
</script>
