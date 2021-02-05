<template>
  <div>
    <user-data @add-user="addNewUser"></user-data>
    <hr />
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.name }}</strong> - {{ user.age }} year(s) old
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Joko",
          age: 23,
        },
      ],
    };
  },
  methods: {
    addNewUser(newUser) {
      const counter = this.users.length;
      const user = {
        id: counter + 1,
        name: newUser.name,
        age: newUser.age,
      };
      this.users.push(user);
    },
  },
};
</script>