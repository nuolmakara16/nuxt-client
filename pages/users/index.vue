<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="getterAllUsers"
          class="elevation-2 px-2"
          :loading='loading'
        >
          <template #[`item.no`]="{ item }">
            {{ getterAllUsers.map((land) => land.id).indexOf(item.id) + 1 }}
          </template>
          <template  #[`item.created_at`]="{ item }">
            {{ $moment(item.created_at).format('MM/DD/YYYY') }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'admin',
  data() {
    return {
      loading: false,
      users: '',
      headers: [
        { text: 'No', value: 'no', sortable: false },
        { text: 'Created At', value: 'created_at', sortable: true },
        { text: 'ID', value: 'id', sortable: false },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Gender', value: 'gender', sortable: false },
      ]
    }
  },
  computed: {
    ...mapGetters({ getterAllUsers: 'getterAllUsers' })
  },
  mounted() {
    this.methodGetAllUsers()
  },
  methods: {
    ...mapActions({ actionGetAllUsers: 'actionGetAllUsers'}),
    async methodGetAllUsers(){
      this.loading = true
      const token = this.$auth.strategy.token.get()
      await this.actionGetAllUsers({ token }).then((res) => {
        this.loading = false
        if (res === 200) {
          this.users = this.getterAllUsers
        }
      })
    }
  }
}
</script>
