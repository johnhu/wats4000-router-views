<template>
  <div class="survey">
      <h1>New Member Survey</h1>
      <p>Please complete the new member survey.</p>
      <form v-on:submit.prevent="validateForm"> <!-- TODO: Set up the proper v-on directive to handle the form submission. -->
        <!-- TODO: Add an error message to be displayed when the user submits invalid form data. -->
        <p class ="error" v-show="showError">Please check the information you have entered. Be sure to fill in all fields.</p>
        <p><label for="q1">Q1: How long have you been building websites?
          <br><input type="text" id="q1" v-model="q1"></label></p><!-- TODO: Add the proper v-model directive to this input element. -->

        <p>Q2: What languages interest you the most?<br>
          <!-- TODO: Create a loop to duplicate the label element and structures it contains for each item in the languageOptions array. -->
          <label v-for="(language, index) in languageOptions" :key="index">
            <input type="checkbox" v-model="q2" :value="language.value">
            {{ language.text }}<!-- TODO: Set the proper v-model directive and use v-bind:value to set the value for this checkbox. -->
            <!-- TODO: Output the text to display this option to the user. -->
          </label>
        </p>

        <p>Q3: What other topics interest you?<br>
          <!-- TODO: Create a loop to duplicate the label element and structures it contains for each item in the topicOptions array. -->
          <label v-for="(topic,index) in topicOptions" :key="index">
            <input type="checkbox" v-model="q3" :value="topic.value"><!-- TODO: Set the proper v-model directive and use v-bind:value to set the value for this checkbox. -->
            <!-- TODO: Output the text to display this option to the user. -->
          {{topic.text}}
          </label>
        </p>
        <p>
          <label for="q4">Q4: What kinds of websites would you like to build someday?<br>
            <textarea cols="70" rows="8" id="q4" placeholder="Type your response here." v-model="q4"></textarea><!-- TODO: Set the proper v-model directive on this textarea. -->
          </label>
        </p>
        <p>
          <label for="q5">Q5: Spaces or Tabs?
            <select id="q5" v-model="q5"><!-- TODO: Set the proper v-model directive on this select element. -->
              <option value="">Select your preference.</option>
              <option value="spaces">Spaces</option>
              <option value="tabs">Tabs</option>
            </select>
          </label>
        </p>
        <p><input type="submit" value="Submit"></p>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Survey',
  data () {
    return {
      showError: false,
      q1: '',
      q2: [],
      q3: [],
      q4: '',
      q5: '',
      languageOptions: [
        {
          text: 'JavaScript',
          value: 'js'
        },
        {
          text: 'Python',
          value: 'py'
        },
        {
          text: 'Ruby',
          value: 'ruby'
        },
        {
          text: 'Java',
          value: 'java'
        },
        {
          text: 'PHP',
          value: 'php'
        }
      ],
      topicOptions: [
        {
          text: 'Accessibility',
          value: 'axe'
        },
        {
          text: 'Experience Design',
          value: 'ux'
        },
        {
          text: 'Operations',
          value: 'ops'
        },
        {
          text: 'Search Engine Optimization',
          value: 'seo'
        },
        {
          text: 'Multimedia',
          value: 'media'
        }
      ]
    }
  },
  methods: {
    validateForm: function () {
      if ((this.q1 !== '') &&
        (this.q2.length !== 0) &&
        (this.q3.length !== 0) &&
        (this.q4 !== '') &&
        (this.q5 !== '')
      ) {
        this.$router.push('secret')
      } else {
        this.showError = true
      }
      // TODO: Validate the data submitted by the user according to these rules:
      // q1 must not be blank
      // q2.length must be greater than 0
      // q3.length must be greater than 0
      // q4 must not be blank
      // q5 must not be blank

      // TODO: If all of the data is valid, then use the $router to move the user to the Secret page.
      // TODO: If the data is not valid, alter the value of showError to show the error message.
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
