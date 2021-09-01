<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for='(user, i) in users' :key='i' cols='12' md='4' lg='3'>
          <v-card class='px-4 py-4' outlined>
            <v-card-title>{{ user.name }}</v-card-title>
            <div class='d-flex'>
              <v-spacer></v-spacer>
              <v-btn color='primary' target='_blank' @click='contact(user)'>
                <v-icon class='mr-2'>mdi-telegram</v-icon>
                contact
              </v-btn>
            </div>
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
      users: [
        { id: 1, name: 'Odom', telegram: 'https://t.me/Pen_Serey_Otdom' },
        { id: 2, name: 'Sothea', telegram: 'https://t.me/sotheaOppa' },
        { id: 3, name: 'Makara', telegram: 'https://t.me/makaranuol' },
      ]
    }
  },
  methods: {
    contact(user) {
      window.open( user.telegram, "_blank");
    }
  }
}
</script>
