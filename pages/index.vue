<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols='3'>
          <v-card>
            <v-card-title>Hello</v-card-title>
          </v-card>
        </v-col>
        <v-col cols='6'>
          <div v-for="(post, index) in posts" :key="index" class='flex-column'>
            <v-hover v-slot="{ hover }">
              <v-card class='mb-4' outlined :elevation="hover ? 4 : 0" :class="{ 'on-hover': hover }">
                <v-card-title> {{ post.title }}</v-card-title>
                <v-card-text>{{ post.body }}</v-card-text>
              </v-card>
            </v-hover>
          </div>
        </v-col>
        <v-col cols='3'>
          <v-card>
            <v-card-title>Hello</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$axios.get('https://gorest.co.in/public/v1/posts')
      this.posts = res.data.data
    }
  }
}
</script>
