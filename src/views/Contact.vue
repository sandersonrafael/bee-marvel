<template>
  <div class="container">
    <Breadcrumb :breadcrumb="['Contact']" />
    <form class="text-dark">
      <div class="col-lg-6 pb-3">
        <label for="form-name" class="form-label">Name</label>
        <input
          type="text"
          name="name"
          id="form-name"
          class="form-control"
          placeholder="Your full name"
          required
          v-model="name"
          @input="validateName"
        >
        <span class="text-danger" ref="nameMessage"></span>
      </div>

      <div class="col-lg-6 pb-3">
        <label for="form-email" class="form-label">Email</label>
        <input
          type="email"
          name="email"
          id="form-email"
          class="form-control"
          placeholder="myemail@email.com"
          required
          v-model="email"
          @input="validateEmail"
        >
        <span class="text-danger" ref="emailMessage"></span>
      </div>

      <div class="col-lg-6 pb-3">
        <label for="form-phone" class="form-label">Phone</label>
        <input
          type="text"
          name="phone"
          id="form-phone"
          class="form-control"
          placeholder="(99) 9 9999-9999"
          required
          v-model="phone"
          @input="validatePhone"
        >
        <span class="text-danger" ref="phoneMessage"></span>
      </div>

      <div class="col-lg-6 pb-3">
        <label for="form-message" class="form-label">Message</label>
        <textarea
          name="message"
          id="form-message"
          rows="5"
          placeholder="Contact message for Marvel"
          class="form-control"
          style="resize: none;"
          required
          v-model="message"
          @input="validateMessage"
        ></textarea>
        <span class="text-danger" ref="textMessage"></span>
      </div>

      <button ref="submitButton" type="submit" class="w-lg-100 fs-5 btn btn-secondary px-4 py-2 disabled">
        Send
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import validateFields from '../utils/validateFields';

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  },
  components: {
    Breadcrumb,
  },
  props: {
    pathRoute: Function,
  },
  mounted() {
    this.$emit('getPathRoute');
  },
  methods: {
    allowSubmit() {
      const button = this.$refs.submitButton as HTMLButtonElement;

      if (
        document.querySelectorAll('.border-danger').length === 0
        && this.name !== ''
        && this.email !== ''
        && this.phone !== ''
        && this.message !== ''
      ) {
        button.classList.add('btn-danger');
        button.classList.remove('disabled');
        button.classList.remove('btn-secondary');
        return;
      }

      button.classList.remove('btn-danger');
      button.classList.add('disabled');
      button.classList.add('btn-secondary');
    },
    validateName(e: Event) {
      const input = (e.target as HTMLInputElement);
      const error = this.$refs.nameMessage as HTMLSpanElement;

      if (validateFields.name(this.name)) {
        input.classList.remove('border-danger');
        error.innerText = '';
      }
      else {
        input.classList.add('border-danger');
        error.innerText = 'Invalid name';
      }
      this.allowSubmit();
    },
    validateEmail(e: Event) {
      const input = (e.target as HTMLInputElement);
      const error = this.$refs.emailMessage as HTMLSpanElement;

      if (validateFields.email(this.email)) {
        input.classList.remove('border-danger');
        error.innerText = '';
      } else {
        input.classList.add('border-danger');
        error.innerText = 'Invalid email';
      }

      this.allowSubmit();
    },
    validatePhone(e: Event) {
      const input = (e.target as HTMLInputElement);
      const error = this.$refs.phoneMessage as HTMLSpanElement;

      this.phone = this.phone.replaceAll(/[^0-9]/g, '').slice(0, 11);

      if (validateFields.phone(this.phone)) {
        this.phone = `(${this.phone.slice(0, 2)}) ${this.phone[2]} ${this.phone.slice(3, 7)}-${this.phone.slice(7, 11)}`;
        input.classList.remove('border-danger');
        error.innerText = '';
      } else {
        input.classList.add('border-danger');
        error.innerText = 'Invalid phone';
      }

      this.allowSubmit();
    },
    validateMessage(e: Event) {
      const textArea = (e.target as HTMLTextAreaElement);
      const error = this.$refs.textMessage as HTMLSpanElement;

      if (validateFields.message(this.message)) {
        textArea.classList.remove('border-danger');
        error.innerText = '';
      } else {
        textArea.classList.add('border-danger');
        error.innerText = 'Message field must be at least 20 characters';
      }

      this.allowSubmit();
    },
  },
};
</script>
<style scoped>
  @media (max-width: 992px) {
    button.w-lg-100 {
      width: 100%;
    }
  }
</style>