<template>
  <v-container>

    <h1>Contact</h1>

    <v-text-field
      v-model="name"
      label="Name"
    />

    <v-text-field
      v-model="email"
      label="Email"
    />

    <v-textarea
      v-model="message"
      label="Message"
    />

    <v-btn @click="submitForm">
      Send
    </v-btn>

  </v-container>
</template>

<script setup>
const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = async () => {
  await $fetch('/api/contact', {
    method: 'POST',
    body: {
      name: name.value,
      email: email.value,
      message: message.value
    }
  })

  alert('Sent!')
}
</script>
