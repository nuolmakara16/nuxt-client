<template>
  <v-container>
    <v-row>
      <v-col v-for='(user, i) in 24' :key='i' cols='3'>
        <v-card>
          <v-img :src="`https://picsum.photos/500/500?random=${i}`"></v-img>
        </v-card>
<!--        <v-card class='px-4 py-4' outlined>-->
<!--          <v-card-title>{{ user.name }}</v-card-title>-->
<!--          <div class='d-flex'>-->
<!--            <v-spacer></v-spacer>-->
<!--            <v-btn color='primary' :href='user.telegram' target='_blank' @click='contact(user)'>-->
<!--              <v-icon class='mr-2'>mdi-telegram</v-icon>-->
<!--              contact-->
<!--            </v-btn>-->
<!--          </div>-->
<!--        </v-card>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      posts: [],
      users: [
        { id: 1, name: 'Odom', telegram: 'https://t.me/Pen_Serey_Otdom' },
        { id: 2, name: 'Sothea', telegram: 'https://t.me/sotheaOppa' },
      ]
    }
  },
  methods: {
    contact(user) {
      console.log(user)
    },
  }
}
</script>
