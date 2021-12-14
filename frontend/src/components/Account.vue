<template>
  <div id="Historial">

    <div class="container">
      <h2>
        Usuario:
        <span>{{ username }}</span>
      </h2>
    </div>

    <h2>Reservas</h2>     
    <div class="container-table">
        <table>
            <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Gimnasio</th>
              
            </tr>

            <tr v-for="booking in bookingByUsername" :key="booking.id">
                <td>{{ booking.bookingdate.substring(0, 10) }}</td>
                <td>{{ booking.bookingdate.substring(11, 19) }}</td>
                <td>{{ booking.gym }}</td>
             
            </tr>
        </table>
    </div>
  </div>

</template>


<script>
import gql from "graphql-tag";

export default {
  name: "Account",

  data: function () {
    return {
      username: localStorage.getItem("username") || "none",
      bookingByUsername: [],
    };
  },

  apollo: {
    bookingByUsername: {
      query: gql`
        query ($username: String!) {
          bookingByUsername(username: $username) {
            id
            usernameOrigin
            gym
            value
            date
            bookingdate
          }
        }
      `,
      variables() {
        return {
          username: this.username,
        };
      },
    },

 
  },

  created: function () {
    this.$apollo.queries.bookingByUsername.refetch();
    
  }
};
</script>


<style>
#Historial {
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

#Historial .container-table{
    width:50%;
    
    max-height: 250px;
    overflow-y: scroll;
    overflow-x: hidden;
}

#Historial table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.3);
  
}

#Historial table td,
#Historial table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#Historial table tr:nth-child(even) {
  background-color: #d6dbdbcb;
}

#Historial table tr:hover {
  background-color: #ddd;
}

#Historial table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(79, 17, 121);
  color: white;
}

#Historial > h2 {
  color: #283747;
  font-size: 25px;
}

#Historial .container {
  padding: 30px;

  
}

#Historial  .container h2 {
  font-size: 25px;
  color: #283747;
}
#Historial .container span {
  color: crimson;
  font-weight: bold;
}
</style>