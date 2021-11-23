<template>
  <v-row>
    <v-col cols='12' sm='6' md='4'>
      <v-sheet outlined rounded>
        <v-card class='px-4 py-2' >
          <h2>Received Orders</h2>
          <v-card class='scroll px-2' height="800" elevation='0'>
            <draggable
              class="list-group"
              :list="orders"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group
                type="transition" :name="!drag ? 'flip-list' : null"
              >
                <v-card v-for='order in orders' :key='order.name' class='my-2 py-4 px-4 d-flex align-center' outlined @click='onItemClick'>
                  <span>{{ order.name }}</span>
                  <v-spacer></v-spacer>
                  <span>$ {{ order.price }}</span>
                </v-card>
              </transition-group>
            </draggable>
          </v-card>

        </v-card>
      </v-sheet>
    </v-col>
    <v-col cols='12' sm='6' md='4'>
      <v-sheet outlined rounded>
        <v-card class='px-4 py-2'>
          <h2>Accepted Orders</h2>
          <draggable
            class="list-group"
            tag="ul"
            :list="received_orders"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group
              type="transition" :name="!drag ? 'flip-list' : null"
            >
              <v-card v-for='order in received_orders' :key='order.name' class='my-2 py-4 px-4 d-flex align-center' outlined>
                <span>{{ order.name }}</span>
                <v-spacer></v-spacer>
                <span>$ {{ order.price }}</span>
              </v-card>
            </transition-group>
          </draggable>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
function getRandom(max) {
  return Math.floor(Math.random() * max).toFixed(2)
}
const orderList = [
  { name: 'Pizza', price: getRandom(100)},
  { name: 'Pasta', price: getRandom(100)},
  { name: 'Burger', price: getRandom(100)},
  { name: 'Potato', price: getRandom(100)},
  { name: 'Beer', price: getRandom(100)},
  { name: 'Tiger', price: getRandom(100)},
  { name: 'Anchor', price: getRandom(100)},
  { name: 'ABC', price: getRandom(100)},
  { name: 'Jinro', price: getRandom(100)},
  { name: 'Cambodia', price: getRandom(100)},
  { name: 'HANUMARN', price: getRandom(100)},
]

export default {
  name: "transition-example-2",
  display: "Transitions",
  data() {
    return {
      drag: false,
      orders: orderList.map((order, index) => {
        return { id: index, name: order.name, price: order.price }
      }),
      received_orders: [],
      accepted_orders: [],
      delivering_orders: [],
      completed_orders: [],
      loading: false,
      email: '',
      password: ''
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    sort() {
      this.orders = this.orders.sort((a, b) => a.order - b.order);
    },
    login() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    checkMove(evt) {
      console.log(evt.draggedContext.element.name);
    },
    onItemClick() {
      console.log('Hello')
    }
  },

}
</script>

<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.scroll {
  overflow-y: scroll
}
</style>
