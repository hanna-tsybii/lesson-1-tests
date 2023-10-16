<template>
  <form class="row mb-5" @submit.prevent="submitForm">
    <div class="col d-grid gap-2">
      <button class="btn btn-primary" type="submite">Add</button>
      <a
        class="btn btn-primary d-flex align-items-center justify-content-center"
        id="addBtn"
        href="./view.html"
      >
        View tests
      </a>
    </div>
    <div class="col">
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Question</span>
        <input
          type="text"
          class="form-control"
          id="questionInput"
          v-model="formData.Question"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div class="input-group mt-2">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            value=""
            aria-label="Radio button for following text input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            v-model="formData.RadioButton1"
          />
        </div>
        <input
          for="flexRadioDefault1"
          type="text"
          value=""
          class="form-control"
          aria-label="Text input with radio button"
          v-model="formData.RadioInput1"
          id="flexRadioInput1"
        />
      </div>
      <div class="input-group mt-2">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            value=""
            aria-label="Radio button for following text input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            v-model="formData.RadioButton2"
          />
        </div>
        <input
          for="flexRadioDefault2"
          type="text"
          value=""
          class="form-control"
          aria-label="Text input with radio button"
          v-model="formData.RadioInput2"
          id="flexRadioInput2"
        />
      </div>
      <div class="input-group mt-2">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            value=""
            aria-label="Radio button for following text input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            v-model="formData.RadioButton3"
          />
        </div>
        <input
          for="flexRadioDefault3"
          type="text"
          value=""
          class="form-control"
          aria-label="Text input with radio button"
          v-model="formData.RadioInput3"
          id="flexRadioInput3"
        />
      </div>
    </div>
  </form>

  <p v-if="submitted">
    <strong>RadioInput1:</strong> {{ formData.RadioInput1 }} <br />
    <strong>RadioInput2:</strong> {{ formData.RadioInput2 }} <br />
    <strong>RadioInput3:</strong> {{ formData.RadioInput3 }}
  </p>
</template>

<script>
export default {
  props: ["result"],
  data() {
    return {
      formData: {
        questionInput: "",
        flexRadioInput1: "",
        flexRadioDefault2: "",
        flexRadioInput3: "",
        result: "",
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      // You can handle the form submission here
      console.log("Form submitted with data:", this.formData);
      this.submitted = true;
      // You can also make an API call here to send the form data to the server
      // For example: using Axios or Fetch API
    },
  },
};
</script>
